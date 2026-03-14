import { isNullish } from 'remeda'

export const convertFile = (input: Blob, name: string) => {
	return new File([
		input
	], name, {
		type: input.type
	})
}

export const compressBlob = async (input: Blob, format: CompressionFormat | null) => {
	if ( isNullish(format) ) {
		return input
	}

	return await new Response(
		input.stream()
			.pipeThrough(
				new CompressionStream(format)
			)
	).blob()
}

export const decompressBlob = async (input: Blob, format: CompressionFormat | null) => {
	if ( isNullish(format) ) {
		return input
	}

	return await new Response(
		input.stream()
			.pipeThrough(
				new DecompressionStream(format)
			)
	).blob()
}

export const downloadBlob = async (url: string) => {
	return await (
		await fetch(url)
	).blob()

}

export const generateBlobURL = (blob: Blob) => {
	return URL.createObjectURL(blob)
}