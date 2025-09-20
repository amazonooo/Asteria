// TODO: Add dynamic lyrics
import { Play } from 'lucide-react'
import styles from './Lyrics.module.scss'

export function Lyrics() {
	return (
		<div className={styles.lyrics}>
			<div>[ Verse 1 ]</div>
			<p>Some things just aren't that simple</p>{' '}
			<p>You called me wondering why</p> <p>I changed Or why</p>{' '}
			<p> don't look the same</p> <p>I Why I think so differently now</p>
			<br />
			<div>[ Chorus ]</div> 
      <p className={styles.active}>
        <Play fill='var(--color-primary)' className={styles.icon} size={11} />
        Is it ever gonna change?</p>{' '}
			<p>Am I gonna feel this way forever?</p>{' '}
			<p>Are you gonna be around for me to count on?</p>{' '}
			<p>Is it ever gonna change?</p> <p>Am I gonna feel this way forever?</p>{' '}
			<p>Are you gonna be around for me to count on? Count on</p>
			<p>On-on-on, on-on-on-on-on</p> <p>On-on-on, on-on-on-on-on</p>
			<p>On-on-on, on-on-on-on-on</p> <p>On-on-on, on-on-on-on-on</p>
			<br />
			<div>[ Verse 2 ]</div> <p>Some things just never seem to fade</p>{' '}
			<p>I'm thinking about how we were on our first date</p>{' '}
			<p>You understood the words I was saying</p>{' '}
			<p>I knew I'd never let you get away</p>
			<br />
			<div>[ Bridge ]</div>{' '}
			<p>Hold you tight, squeeze you right, tell you what I want</p>{' '}
			<p>Put me in your bedroom and I'll sing a little song</p>{' '}
			<p>Hold you tight, squeeze you right, give you all I've got</p>{' '}
			<p>See you in the morning, over coffee, we'll talk, oh</p>
		</div>
	)
}
