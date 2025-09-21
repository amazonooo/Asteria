import { ProgressBar } from '@/components/ui/progress-bar/ProgressBar'
import { TrackInfo } from '@/components/ui/track-info/TrackInfo'
import { playerStore } from '@/store/store'
import { Pause, Play, SkipBack, SkipForward, Volume, Volume1, Volume2 } from 'lucide-react'
import { useAudioPlayer } from './useAudioPlayer'

export function AudioPlayer() {
	const { audioRef, changeTrack, onSeek, setVolume, togglePlayPause } = useAudioPlayer()

  if(!playerStore.currentTrack) {
    return null
  }

  return (
		<div className='w-full py-5 px-10 bg-player-bg border-t border-white/10 grid grid-cols-[1fr_5.7fr] fixed bottom-0 left-0'>
			<TrackInfo
				title={playerStore.currentTrack.name}
				subtitle={playerStore.currentTrack.artist.name}
				image={playerStore.currentTrack.cover}
			/>

			<audio
				ref={audioRef}
				src={playerStore.currentTrack.file}
				onTimeUpdate={e => {
					const currentTime = Math.floor(e.currentTarget.currentTime)
					playerStore.seek(currentTime)
				}}
				onEnded={() => (playerStore.isPlaying = false)}
			/>

			<div className='grid grid-cols-[1fr_8fr_2fr] gap-8 items-center'>
				<div className='flex items-center gap-2.5'>
					<button
						className='opacity-80 hover:opacity-100 duration-300'
						onClick={() => changeTrack('prev')}
					>
						<SkipBack size={20} />
					</button>

					<button
						className='rounded-full bg-gradient-to-r from-[#3c3d41] to-[#444549] p-3.5 border border-white/5 border-solid hover:shadow duration-300 text-primary group hover:scale-103 will-change-transform'
						onClick={togglePlayPause}
					>
						{playerStore.isPlaying ? <Pause size={20} /> : <Play size={20} />}
					</button>

					<button
						className='opacity-80 hover:opacity-100 duration-300'
						onClick={() => changeTrack('next')}
					>
						<SkipForward size={20} />
					</button>
				</div>

				<ProgressBar
					currentValue={playerStore.currentTime}
					value={playerStore.currentTrack.duration}
					progress={playerStore.progress}
					onSeek={(time: number) => onSeek(time)}
					isTextDisplayed
				/>

				<div className='pl-6 max-w-36 grid grid-cols-[1fr_8fr] gap-1.5 items-center'>
					<button onClick={() => setVolume(playerStore.volume === 0 ? 85 : 0)}>
						{playerStore.volume === 0 ? (
							<Volume />
						) : playerStore.volume < 60 ? (
							<Volume1 />
						) : (
							<Volume2 />
						)}
					</button>

					<ProgressBar
						currentValue={playerStore.volume}
						value={100}
						progress={playerStore.volume}
						onSeek={(value: number) => setVolume(value)}
						isThumbDisplayed={false}
					/>
				</div>
			</div>
		</div>
	)
}
