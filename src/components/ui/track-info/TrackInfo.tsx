interface Props {
  image?: string
  title: string
  subtitle: string
}

export function TrackInfo({subtitle, title}: Props) {
  return (
		<div className='flex items-center gap-3'>
			{/* TODO: Circle progress bar */}
			<div className='w-10 h-10 bg-white/5 border border-primary rounded-full' />
			<div>
				<div className='text-white font-medium select-none'>{title}</div>
				<div className='opacity-60 text-sm select-none'>
					{subtitle}
				</div>
			</div>
		</div>
	)
}
