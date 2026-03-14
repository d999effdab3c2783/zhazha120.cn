import type { Ast, Op } from '@/types/database/filter'
import type { RecordObject } from '@/types/shared'
import type { ILexingError } from '@chevrotain/types'
import { createToken, type IToken, Lexer } from 'chevrotain'
import { isEmptyish, isNullish, isNumber, isString } from 'remeda'

const WhiteSpace = createToken({ name: 'WhiteSpace', pattern: /\s+/, group: Lexer.SKIPPED })
const And = createToken({ name: 'And', pattern: /&&/ })
const Or = createToken({ name: 'Or', pattern: /\|\|/ })

const Eq3 = createToken({ name: 'Eq3', pattern: /===/ })
const Neq3 = createToken({ name: 'Neq3', pattern: /!==/ })
const Eq2 = createToken({ name: 'Eq2', pattern: /==/ })
const Neq2 = createToken({ name: 'Neq2', pattern: /!=/ })
const Gte = createToken({ name: 'Gte', pattern: />=/ })
const Lte = createToken({ name: 'Lte', pattern: /<=/ })
const Gt = createToken({ name: 'Gt', pattern: />/ })
const Lt = createToken({ name: 'Lt', pattern: /</ })
const RegexMatch = createToken({ name: 'RegexMatch', pattern: /~=/ })

const LParen = createToken({ name: 'LParen', pattern: /\(/ })
const RParen = createToken({ name: 'RParen', pattern: /\)/ })
const Comma = createToken({ name: 'Comma', pattern: /,/ })

const True = createToken({ name: 'True', pattern: /true\b/ })
const False = createToken({ name: 'False', pattern: /false\b/ })
const Null = createToken({ name: 'Null', pattern: /null\b/ })
const Undefined = createToken({ name: 'Undefined', pattern: /undefined\b/ })
const In = createToken({ name: 'In', pattern: /in\b/ })

const StringLiteral = createToken({
	name: 'StringLiteral',
	pattern: /"(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'/
})
const NumberLiteral = createToken({ name: 'NumberLiteral', pattern: /-?(?:0|[1-9]\d*)(?:\.\d+)?/ })
const Identifier = createToken({ name: 'Identifier', pattern: /[a-zA-Z_]\w*/ })

const lexer = new Lexer([
	WhiteSpace,
	And,
	Or,
	Eq3,
	Neq3,
	Eq2,
	Neq2,
	Gte,
	Lte,
	Gt,
	Lt,
	RegexMatch,
	LParen,
	RParen,
	Comma,
	True,
	False,
	Null,
	Undefined,
	In,
	StringLiteral,
	NumberLiteral,
	Identifier
])

class Parser {
	protected i = 0
	protected readonly tokens!: IToken[]

	constructor(tokens: IToken[]) {
		this.tokens = tokens
	}

	parse(): Ast {
		const expr = this.parseOr()

		if ( !this.atEnd() ) {
			throw new Error(`意外的标记: ${this.peek()?.image ?? '文件结尾'}`)
		}

		return expr
	}

	protected peek() {
		return this.tokens[this.i]
	}

	protected atEnd() {
		return this.i >= this.tokens.length
	}

	protected match(tokenType: unknown) {
		const t = this.peek()

		if ( t && t.tokenType === tokenType ) {
			this.i++
			return t
		}

		return undefined
	}

	protected expect(tokenType: unknown, msg: string) {
		const t = this.match(tokenType)

		if ( isNullish(t) ) {
			throw new Error(msg)
		}

		return t
	}

	protected parseOr(): Ast {
		let node = this.parseAnd()

		while (this.match(Or)) {
			node = {
				type: 'binary',
				op: '||',
				left: node,
				right: this.parseAnd()
			}
		}

		return node
	}

	protected parseAnd(): Ast {
		let node = this.parseComparison()

		while (this.match(And)) {
			node = {
				type: 'binary',
				op: '&&',
				left: node,
				right: this.parseComparison()
			}
		}

		return node
	}

	protected parseComparison(): Ast {
		const left = this.parsePrimary()

		const opToken =
			this.match(Eq3) ??
			this.match(Neq3) ??
			this.match(Eq2) ??
			this.match(Neq2) ??
			this.match(Gte) ??
			this.match(Lte) ??
			this.match(Gt) ??
			this.match(Lt) ??
			this.match(RegexMatch) ??
			this.match(In)

		if ( isNullish(opToken) ) {
			return left
		}

		if ( opToken.tokenType === In ) {
			this.expect(LParen, '期待 "("')

			const items: Ast[] = []

			if ( !this.match(RParen) ) {
				items.push(this.parsePrimary())

				while (this.match(Comma)) {
					items.push(this.parsePrimary())
				}

				this.expect(RParen, `期望 "值列表" 后接 ")"`)
			}

			return {
				type: 'binary',
				op: 'in',
				left,
				right: {
					type: 'list',
					items
				}
			}
		}

		const right = this.parsePrimary()

		const opMap: Record<string, Op> = {
			'||': '||',
			'&&': '&&',
			'===': '===',
			'!==': '!==',
			'==': '==',
			'!=': '!=',
			'>': '>',
			'>=': '>=',
			'<': '<',
			'<=': '<=',
			'~=': '~=',
			in: 'in'
		}

		return {
			type: 'binary',
			op: opMap[opToken.image],
			left,
			right
		}
	}

	protected parsePrimary(): Ast {
		if ( this.match(LParen) ) {
			const expr = this.parseOr()
			this.expect(RParen, `期待 ")"`)
			return expr
		}

		const t = this.peek()

		if ( isNullish(t) ) {
			throw new Error('查询语句意外结束')
		}

		this.i++

		if ( t.tokenType === Identifier ) {
			return {
				type: 'identifier',
				name: t.image
			}
		}

		if ( t.tokenType === NumberLiteral ) {
			return {
				type: 'literal',
				value: Number(t.image)
			}
		}

		if ( t.tokenType === True ) {
			return {
				type: 'literal',
				value: true
			}
		}

		if ( t.tokenType === False ) {
			return {
				type: 'literal',
				value: false
			}
		}

		if ( t.tokenType === Null ) {
			return {
				type: 'literal',
				value: null
			}
		}

		if ( t.tokenType === Undefined ) {
			return {
				type: 'literal',
				value: undefined
			}
		}

		if ( t.tokenType === StringLiteral ) {
			try {
				return {
					type: 'literal',
					value: JSON.parse(
						t.image.replace(/^'/, '"')
							.replace(/'$/, '"')
					)
				}
			} catch {
				return {
					type: 'literal',
					value: t.image.slice(1, -1)
				}
			}
		}

		throw new Error(`意外的标记: ${t.image}`)
	}
}

const evaluate = (node: Ast, row: RecordObject): unknown => {
	if ( node.type === 'literal' ) {
		return node.value
	}

	if ( node.type === 'identifier' ) {
		return row[node.name]
	}

	if ( node.type === 'list' ) {
		return node.items.map((x) => {
			return evaluate(x, row)
		})
	}

	const left = evaluate(node.left, row)
	const right = evaluate(node.right, row)

	switch (node.op) {
		case '||':
			return Boolean(left) || Boolean(right)
		case '&&':
			return Boolean(left) && Boolean(right)
		case '===':
			return left === right
		case '!==':
			return left !== right
		case '==':
			return left == right
		case '!=':
			return left != right
		case '>':
			if (
				isNullish(left) ||
				!isNumber(left) ||
				isNullish(right) ||
				!isNumber(right)
			) {
				return false
			}

			return left > right
		case '>=':
			if (
				isNullish(left) ||
				!isNumber(left) ||
				isNullish(right) ||
				!isNumber(right)
			) {
				return false
			}

			return left >= right
		case '<':
			if (
				isNullish(left) ||
				!isNumber(left) ||
				isNullish(right) ||
				!isNumber(right)
			) {
				return false
			}

			return left < right
		case '<=':
			if (
				isNullish(left) ||
				!isNumber(left) ||
				isNullish(right) ||
				!isNumber(right)
			) {
				return false
			}

			return left <= right
		case 'in':
			return Array.isArray(right) && right.some((v) => {
				return v === left
			})
		case '~=':
			if (
				isNullish(left) ||
				!isString(left) ||
				isNullish(right) ||
				!isString(right)
			) {
				return false
			}

			try {
				return new RegExp(right).test(left)
			} catch {
				return false
			}
	}
}

export class FilterError extends Error {
	constructor(errors: ILexingError[]) {
		super()
		this._errors = errors
	}

	protected _errors: ILexingError[]

	get errors() {
		return this._errors
	}
}

export default <T extends RecordObject>(input: T[], query: string) => {
	const q = query.trim()

	if ( isNullish(q) || q === '' ) {
		return input
	}

	const { tokens, errors } = lexer.tokenize(q)

	if ( !isEmptyish(errors) ) {
		throw new FilterError(errors)
	}

	const ast = new Parser(tokens).parse()

	return input.filter(row => {
		return Boolean(
			evaluate(ast, row)
		)
	})
}