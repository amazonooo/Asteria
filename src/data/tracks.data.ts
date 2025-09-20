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
		name: 'All The Way Live',
		file: '/audio/all_the_way_live.mp3',
		artist: ARTISTS[6], // Metro Boomin (фит)
		duration: 245,
	},
	{
		name: 'Am I Dreaming',
		file: '/audio/am_i_dreaming.mp3',
		artist: ARTISTS[3], // Lil Yachty
		duration: 256,
	},
	{
		name: 'Creepin',
		file: '/audio/creepin.mp3',
		artist: ARTISTS[6], // Metro Boomin
		duration: 221,
	},
	{
		name: 'drive ME crazy!',
		file: '/audio/drive_me_crazy.mp3',
		artist: ARTISTS[3], // Lil Yachty
		duration: 230,
	},
	{
		name: 'Gloria',
		file: '/audio/gloria.mp3',
		artist: ARTISTS[4], // Drake (есть альбом Gloria, но у тебя скорее плейсхолдер)
		duration: 287,
	},
	{
		name: 'Good Days',
		file: '/audio/good_days.mp3',
		artist: ARTISTS[2], // SZA
		duration: 278,
	},
	{
		name: 'hello?',
		file: '/audio/hello.mp3',
		artist: ARTISTS[0], // Clairo
		duration: 135,
	},
	{
		name: 'Ivy',
		file: '/audio/ivy.mp3',
		artist: ARTISTS[1], // Frank Ocean
		duration: 249,
	},
	{
		name: 'One Dance',
		file: '/audio/one_dance.mp3',
		artist: ARTISTS[4], // Drake
		duration: 173,
	},
	{
		name: 'Open Arms',
		file: '/audio/open_arms.mp3',
		artist: ARTISTS[2], // SZA (трек SZA ft. Travis Scott)
		duration: 239,
	},
	{
		name: 'Pink + White',
		file: '/audio/pink_white.mp3',
		artist: ARTISTS[1], // Frank Ocean
		duration: 184,
	},
	{
		name: 'Seigfried',
		file: '/audio/seigfried.mp3',
		artist: ARTISTS[1], // Frank Ocean
		duration: 334,
	},
	{
		name: 'Self-love',
		file: '/audio/self_love.mp3',
		artist: ARTISTS[6], // Metro Boomin
		duration: 189,
	},
	{
		name: 'Snooze',
		file: '/audio/snooze.mp3',
		artist: ARTISTS[2], // SZA
		duration: 201,
	},
]