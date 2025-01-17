import 'server-only'
import { accessSync, constants, existsSync } from 'node:fs'
import { rm } from 'node:fs/promises'

namespace System {
	interface isAccessibleOptions {
		mode?: number
	}
	/**
	 * Checks if a path is accessible with the given mode.
	 */
	export const isAccessible = (path: string, { mode = constants.W_OK }: isAccessibleOptions = {}) => {
		try {
			accessSync(path, mode)
			return true
		} catch {
			return false
		}
	}
	/**
	 * Checks if a file or directory exists and is writable.
	 */
	export const exists = (path: string) => {
		return existsSync(path)
	}

	export const removeFile = (path: string) => {
		return rm(path, { force: true })
	}
}

export default System
