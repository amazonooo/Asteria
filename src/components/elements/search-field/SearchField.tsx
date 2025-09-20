import { Search } from 'lucide-react'

export function SearchField() {

  
  return (
		<div>
			<label className='flex items-center gap-3 group'>
				<Search className='opacity-40 group-hover:opacity-100 group-focus-within:opacity-100 transition-opacity duration-300' />
				<input
					type='search'
					placeholder='Search for songs, artists, etc...'
					className='bg-transparent w-full outline-none'
				/>
			</label>
		</div>
	)
}
