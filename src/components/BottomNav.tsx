import React from 'react'
import { AiOutlineHome } from 'react-icons/ai'
import { MdOutlineCreate } from 'react-icons/md'
import { IoMdSearch } from 'react-icons/io'
import { ProfileButton } from '.'
import Link from 'next/link'

const BottomNav = () => {
	return (
		<div className='flex md:hidden w-full h-10 p-4 bg-white justify-around items-center fixed bottom-0 left-0 '>
			<Link
				href='/'
				className='w-8 h-8 hover:bg-gray-300 rounded-full flex justify-center items-center'>
				<AiOutlineHome size={21} />
			</Link>

			<Link
				href='/search'
				className='w-8 h-8 hover:bg-gray-300 rounded-full flex justify-center items-center'>
				<IoMdSearch size={21} />
			</Link>

			<Link
				href='/create'
				className='w-8 h-8 hover:bg-gray-300 rounded-full flex justify-center items-center'>
				<MdOutlineCreate size={21} />
			</Link>

			<ProfileButton />
		</div>
	)
}

export default BottomNav
