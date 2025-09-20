import { LIBRARY_MENU_ITEMS, MENU_ITEMS } from '@/data/menu.data'
import { Menu } from './Menu'

export function LeftSidebar() {
  return (
		<aside className='px-layout py-9 border-r border-r-player-bg h-full'>
			<Menu items={MENU_ITEMS} />

			<hr className='my-8 border-player-bg' />

			<Menu items={LIBRARY_MENU_ITEMS} title='Your Library' />

			<hr className='my-8 border-player-bg' />

      {/* TODO: Add playlist */}
			<Menu items={[]} title='Playlists' />
		</aside>
	)
}