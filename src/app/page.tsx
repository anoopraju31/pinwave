import { Sidebar } from '@/components'

export default function Home() {
	return (
		<main className='h-[200vh] relative flex'>
			<div className=''>
				<Sidebar />
			</div>

			<h1 className='w-full h-40  lg:ml-0 text-center '> Hello world </h1>
		</main>
	)
}
