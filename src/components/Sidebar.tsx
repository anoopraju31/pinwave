'use client'

import { useAppSelector } from '@/store'
import Link from 'next/link'
import React from 'react'
import { AiOutlineHome } from 'react-icons/ai'
import { MdOutlineCreate } from 'react-icons/md'

const Sidebar = () => {
	const sidebarToggle = useAppSelector((state) => state.sidebarToggle)
	return (
		<div
			className={`w-full sm:w-64 h-[var(--sidebar-height)] p-4 overflow-y-auto z-50 fixed lg:sticky top-16 ${
				sidebarToggle ? 'left-0' : '-left-[100vw]'
			} bg-white flex gap-2 flex-col transition-all duration-1000`}>
			<div className='flex flex-col gap-2'>
				<div className='p-2 flex items-center gap-3  bg-black text-white rounded-lg'>
					<AiOutlineHome />
					<Link href='/'> Home </Link>
				</div>

				<div className='p-2 flex items-center gap-3 rounded-lg hover:bg-black hover:text-white'>
					<MdOutlineCreate />
					<Link href='/'> Create </Link>
				</div>
			</div>

			<div className='flex-1 flex gap-4 flex-col'>
				<div className='p-2 text-center border-b text-gray-500'>
					{' '}
					Browse Collections{' '}
				</div>
				<div className='flex flex-col'>
					<div className='p-2 flex items-center gap-3 group hover:bg-black hover:text-white rounded-lg'>
						<div className='w-8 h-8 rounded-full bg-black group-hover:bg-white'></div>
						<Link href='/'> Home </Link>
					</div>

					<div className='p-2 flex items-center gap-3 group hover:bg-black hover:text-white rounded-lg'>
						<div className='w-8 h-8 rounded-full bg-black group-hover:bg-white'></div>
						<Link href='/'> Home </Link>
					</div>

					<div className='p-2 flex items-center gap-3 group hover:bg-black hover:text-white rounded-lg'>
						<div className='w-8 h-8 rounded-full bg-black group-hover:bg-white'></div>
						<Link href='/'> Home </Link>
					</div>

					<div className='p-2 flex items-center gap-3 group hover:bg-black hover:text-white rounded-lg'>
						<div className='w-8 h-8 rounded-full bg-black group-hover:bg-white'></div>
						<Link href='/'> Home </Link>
					</div>

					<div className='p-2 flex items-center gap-3 group hover:bg-black hover:text-white rounded-lg'>
						<div className='w-8 h-8 rounded-full bg-black group-hover:bg-white'></div>
						<Link href='/'> Home </Link>
					</div>

					<div className='p-2 flex items-center gap-3 group hover:bg-black hover:text-white rounded-lg'>
						<div className='w-8 h-8 rounded-full bg-black group-hover:bg-white'></div>
						<Link href='/'> Home </Link>
					</div>

					<div className='p-2 flex items-center gap-3 group hover:bg-black hover:text-white rounded-lg'>
						<div className='w-8 h-8 rounded-full bg-black group-hover:bg-white'></div>
						<Link href='/'> Home </Link>
					</div>
				</div>
			</div>

			<div className='border-t block lg:hidden'>
				<div className='p-2 flex items-center gap-3'>
					<div className='w-8 h-8 rounded-full bg-black'></div>
					<Link className='' href='/'>
						{' '}
						Home{' '}
					</Link>
				</div>
			</div>
		</div>
	)
}

export default Sidebar
