'use client'
import Image from 'next/image'
import { AiFillHeart } from 'react-icons/ai'

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
		<div className='w-full h-fit rounded-lg relative group'>
			<Image
				src={n[id % 10]}
				alt=''
				className=' w-full h-fit rounded-2xl'
				width={400}
				height={300}
			/>

			<div className='hidden group-hover:block absolute top-2 text-xl left-2 text-white'>
				<div className='w-7 h-7 rounded-full bg-white'></div>
			</div>
			<div className='hidden group-hover:block absolute top-2 right-2 px-2 text-sm rounded-3xl text-white bg-red-500'>
				Save
			</div>

			<div className='hidden group-hover:block absolute bottom-2 text-xl left-2 text-white'>
				<AiFillHeart />
			</div>

			<div className='hidden group-hover:block w-4/6 truncate absolute bottom-2 right-2 px-2 py-1 text-xs rounded-3xl text-black bg-white'>
				unslash.com/photo-wenuoigwnoir139u4
			</div>
		</div>
	)
}

export default PinCard
