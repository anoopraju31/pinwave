'use client'
import { PinCard, Sidebar } from '@/components'
import Masonry from 'react-masonry-css'

export default function Home() {
	let arr = [
		0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
		21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39,
		0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
		21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39,
		0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
		21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39,
	]

	const breakpointColumnsObj = {
		default: 6,
		1920: 6,
		1536: 5,
		1280: 4,
		1100: 3,
		700: 2,
		500: 1,
	}

	const items = arr.map((id) => <PinCard id={id} key={id} />)
	return (
		<main className='relative flex'>
			<div className=''>
				<Sidebar />
			</div>

			<section className='p-4 w-full'>
				<Masonry
					breakpointCols={breakpointColumnsObj}
					className='w-full flex gap-4'
					columnClassName='flex flex-col gap-4'>
					{items}
				</Masonry>
			</section>
		</main>
	)
}
