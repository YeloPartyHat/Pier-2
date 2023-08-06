import { PrismaClient } from '@prisma/client'
import path from 'path'

class PierSettings {
	/**
	 * Validates & creates (if needed) the settings table.
	 */
	static async getSettings(prisma: PrismaClient) {
		let downloadSettings = await prisma.downloadSettings.findFirst()
		if (!downloadSettings) {
			const basePath = path.resolve('./downloads')
			downloadSettings = await prisma.downloadSettings.create({
				data: {
					id: 1,
					path: basePath,
					audioPath: path.join(basePath, '/audio'),
					imagePath: path.join(basePath, '/image'),
					videoPath: path.join(basePath, '/video'),
				},
			})
		}

		let settings = await prisma.settings.findFirst()
		if (!settings) {
			settings = await prisma.settings.create({
				data: {
					id: 1,
					downloadSettingsId: downloadSettings.id,
				},
			})
		}

		return { ...settings, downloads: downloadSettings }
	}
}

export default PierSettings
