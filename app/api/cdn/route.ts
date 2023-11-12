/**
 * While I figure out a better workaround,
 * this file simply serves from the local filesystem
 * with no security.
 */

import System from '@/libs/server-only/System'
import { lookup } from 'mime'
import { NextRequest, NextResponse } from 'next/server'
import { constants } from 'node:fs'
import { readFile } from 'node:fs/promises'

export const GET = async (request: NextRequest) => {
	const url = new URL(request.url)
	const path = url.searchParams.get('p')

	if (typeof path !== 'string') {
		throw new Error('No path provided.')
	}
	if (!System.isAccessible(path, { mode: constants.R_OK })) {
		throw new Error(`Path '${path}' is not accessible.`)
	}

	const file = await readFile(path)
	const response = new NextResponse(file)
	response.headers.set('Content-Type', 'application/octet-stream')
	return response
}
