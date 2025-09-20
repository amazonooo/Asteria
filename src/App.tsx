import { Play } from 'lucide-react'
import { SearchField } from './components/elements/search-field/SearchField'
import { TRACKS } from './data/tracks.data'
import { Track } from './components/elements/track-item/Track'

function App() {
  return (
		<div>
			<SearchField />
			<div className='relative'>
				<img src='/banner.jpg' alt='banner' className='rounded-xl' />

				<div className='flex items-center justify-between absolute bottom-layout left-0 px-layout w-full'>
					<div>
						<h1 className='text-2xl font-semibold mb-[0.18rem] text-white'>
							Daft Punk
						</h1>
						<h2 className='text-sm text-primary font-medium'>6.8m listeners</h2>
					</div>

					<button className='rounded-full bg-gradient-to-r from-[#2f3034] to-[#1f2026] p-5 border border-player-bg border-solid hover:translate-y-[-2px] hover:shadow transition-all duration-300'>
						<Play
							fill='var(--color-primary)'
							className='text-primary'
							size={22}
						/>
					</button>
				</div>
			</div>

      <div className='mt-5'>
        {TRACKS.map((track) => (
          <div key={track.name}>
            <Track track={track} />
          </div>
        ))}
      </div>
		</div>
	)
}

export default App
