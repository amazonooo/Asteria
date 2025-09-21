import type { ITrack } from '@/types/track.types'
import { Ellipsis, Heart } from 'lucide-react'
import { TrackInfo } from '@/components/ui/track-info/TrackInfo'
import { transformDuration } from '@/utils/transformDuration'

interface Props {
  track: ITrack
}

export function Track({ track }: Props) {
  return (
		<div className='border-b border-player-bg/40 py-5 flex justify-between items-center'>

			<TrackInfo title={track.name} subtitle={transformDuration(track.duration)} image={track.cover} />

			<div className='flex items-center gap-4'>
				<button>
					<Heart className='text-primary opacity-85 duration-300 hover:opacity-100' />
				</button>
				<button>
					<Ellipsis className='opacity-30 duration-300 hover:opacity-100' />
				</button>
			</div>
		</div>
	)
}
