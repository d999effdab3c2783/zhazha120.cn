export type Op = '||' | '&&' | '===' | '!==' | '==' | '!=' | '>' | '>=' | '<' | '<=' | '~=' | 'in'

export type Ast = {
	type: 'binary'
	op: Op
	left: Ast
	right: Ast
} | {
	type: 'list'
	items: Ast[]
} | {
	type: 'identifier'
	name: string
} | {
	type: 'literal'
	value: unknown
}