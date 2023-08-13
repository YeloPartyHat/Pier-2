import { basename, dirname } from 'node:path'
import { pipeline as streamPipeline } from 'node:stream/promises'
import got from 'got'
import { createWriteStream, mkdirSync, writeFileSync } from 'node:fs'
import { fileTypeFromFile } from 'file-type'
import Debugger from './Debugger'

namespace Network {
	export const getFilenameFromUrl = (path: string) => {
		const url = new URL(path)
		return basename(url.pathname)
	}
	interface fileProps {
		url: string
		output: string // directory + filename + extension
	}
	interface fileReturn {
		mediaType: string
		size: number
	}

	const writeFileAndDirectories = (output: string) => {
		mkdirSync(dirname(output), { recursive: true })
		writeFileSync(output, '')
	}

	export const getFile = async ({ url, output }: fileProps): Promise<fileReturn> => {
		const gotStream = got.stream(url)
		writeFileAndDirectories(output)
		const outStream = createWriteStream(output)
		await streamPipeline(gotStream, outStream)
		/** @todo - Liam: Figure out how to get this to read from `got` stream */
		const fileType = await fileTypeFromFile(output)
		const size = outStream.bytesWritten
		const mediaType = fileType?.mime ?? 'application/octet-stream'
		Debugger.log(`Saving file from '${url}' to location:`, { output, size, mediaType })
		return { mediaType, size }
	}
}

export default Network