'use client'
import Image from 'next/image'

const PinCard = ({ id }: { id: number }) => {
	const n = [
		'/1.avif',
		'/2.avif',
		'/3.avif',
		'/4.avif',
		'/5.avif',
		'/6.avif',
		'/7.avif',
		'/8.avif',
		'/9.avif',
		'/10.avif',
	]

	return (
		<div className='w-full h-fit rounded-lg'>
			<Image
				src={n[id % 10]}
				alt=''
				className=' w-full h-fit rounded-lg'
				width={400}
				height={300}
			/>
		</div>
	)
}

export default PinCard
