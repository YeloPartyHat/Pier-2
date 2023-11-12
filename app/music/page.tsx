'use client'
import DashboardPage from '@/components/core/DashboardPage'
import { Box, Card, CardContent, Grid, Link, Typography } from '@mui/material'
import { useQuery } from '@apollo/client'
import { GetTracksDocument } from '@/gql/codegen/graphql'
import { secondsToTimestamp } from '@/libs/helpers'
import Image from 'next/image'

const IndexPage = () => {
	const { data, loading, error } = useQuery(GetTracksDocument)
	return (
		<DashboardPage>
			<Typography variant='h1'>Music</Typography>
			{loading && <Typography variant='body1'>Loading...</Typography>}
			{error && <Typography variant='body1'>Error: {error.message}</Typography>}
			{data && (
				<Grid
					container
					gap={2}
				>
					{data?.tracks.map((track) => {
						if (!track) return null
						return (
							<Card key={track.id}>
								<CardContent>
									<Image
										src={track.thumbnail.file.location}
										alt={`Video cover of ${track.title}`}
										width={track.thumbnail.width}
										height={track.thumbnail.height}
									/>
									<Typography variant='h5'>{track.title}</Typography>
									<Typography variant='body2'>
										By {track.author.name} | {secondsToTimestamp(track.duration)}
									</Typography>
									<Typography variant='body1'>
										Sourced from <Link href={track.originalUrl}>{track.author.provider.name}</Link>
									</Typography>
								</CardContent>
							</Card>
						)
					})}
				</Grid>
			)}
		</DashboardPage>
	)
}

export default IndexPage
