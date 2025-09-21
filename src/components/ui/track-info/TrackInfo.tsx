import { playerStore } from '@/store/store'
import type { ITrack } from '@/types/track.types'

interface Props {
  track: ITrack
	hasPlayButton?: boolean
}

export function TrackInfo({track, hasPlayButton}: Props) {
  return (
		<div className='flex items-center gap-3'>
			{/* TODO: Circle progress bar */}

			{hasPlayButton ? (
				<button onClick={() => playerStore.setTrack(track)}>
					<img
						src={track.cover}
						alt={track.name}
						className='w-12 h-12 rounded-full object-cover'
					/>
				</button>
			) : (
				<img
					src={track.cover}
					alt={track.name}
					className='w-12 h-12 rounded-full object-cover'
				/>
			)}
			<button>
				<img
					src={track.cover}
					alt={track.name}
					className='w-12 h-12 rounded-full object-cover'
				/>
			</button>

			<div>
				<div className='text-white font-medium select-none'>{track.name}</div>
				<div className='opacity-60 text-sm select-none'>{track.artist}</div>
			</div>
		</div>
	)
}
