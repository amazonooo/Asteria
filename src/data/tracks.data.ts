import type { ITrack } from '../types/track.types'
import { ARTISTS } from './artist.data'

export const TRACKS: ITrack[] = [
	{
		name: '4ever',
		file: '/audio/4ever.mp3',
		artist: ARTISTS[0], // Clairo
		duration: 159,
	},
	{
		name: 'all_the_way_live',
		file: '/audio/all_the_way_live.mp3',
		artist: ARTISTS[6], // Metro Boomin (фит)
		duration: 0,
	},
	{
		name: 'am_i_dreaming',
		file: '/audio/am_i_dreaming.mp3',
		artist: ARTISTS[3], // Lil Yachty
		duration: 0,
	},
	{
		name: 'creepin',
		file: '/audio/creepin.mp3',
		artist: ARTISTS[6], // Metro Boomin
		duration: 0,
	},
	{
		name: 'drive_me_crazy',
		file: '/audio/drive_me_crazy.mp3',
		artist: ARTISTS[3], // Lil Yachty
		duration: 0,
	},
	{
		name: 'gloria',
		file: '/audio/gloria.mp3',
		artist: ARTISTS[4], // Drake (есть альбом Gloria, но у тебя скорее плейсхолдер)
		duration: 0,
	},
	{
		name: 'good_days',
		file: '/audio/good_days.mp3',
		artist: ARTISTS[2], // SZA
		duration: 0,
	},
	{
		name: 'hello',
		file: '/audio/hello.mp3',
		artist: ARTISTS[0], // Clairo
		duration: 0,
	},
	{
		name: 'ivy',
		file: '/audio/ivy.mp3',
		artist: ARTISTS[1], // Frank Ocean
		duration: 0,
	},
	{
		name: 'one_dance',
		file: '/audio/one_dance.mp3',
		artist: ARTISTS[4], // Drake
		duration: 0,
	},
	{
		name: 'open_arms',
		file: '/audio/open_arms.mp3',
		artist: ARTISTS[2], // SZA (трек SZA ft. Travis Scott)
		duration: 0,
	},
	{
		name: 'pink_white',
		file: '/audio/pink_white.mp3',
		artist: ARTISTS[1], // Frank Ocean
		duration: 184,
	},
	{
		name: 'seigfried',
		file: '/audio/seigfried.mp3',
		artist: ARTISTS[1], // Frank Ocean
		duration: 0,
	},
	{
		name: 'self_love',
		file: '/audio/self_love.mp3',
		artist: ARTISTS[6], // Metro Boomin
		duration: 0,
	},
	{
		name: 'snooze',
		file: '/audio/snooze.mp3',
		artist: ARTISTS[2], // SZA
		duration: 0,
	},
]