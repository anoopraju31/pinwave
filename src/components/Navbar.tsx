'use client'

import Link from 'next/link'
import { RxHamburgerMenu } from 'react-icons/rx'
import { AiOutlineClose } from 'react-icons/ai'
import { AnimatePresence, motion } from 'framer-motion'
import { NavLink, ProfileButton, SearchBar } from '.'
import { useAppDispatch, useAppSelector } from '@/store'
import { toggle } from '@/features/sidebarToggleSlice'

const Navbar = () => {
	const dispatch = useAppDispatch()
	const sidebarToggle = useAppSelector((state) => state.sidebarToggle)

	const toggleSideBar = () => {
		dispatch(toggle())
	}

	return (
		<header className='h-16 px-4 flex items-center justify-between sticky top-0 bg-white text-gray-700 z-50'>
			<div className='text-lg font-bold'>
				<Link href='/'> PinWave </Link>
			</div>

			<div className='hidden md:block w-2/5'>
				<SearchBar />
			</div>

			<div className='hidden lg:flex justify-between items-center gap-4'>
				<NavLink title='Home' to='/' />
				<NavLink title='Create' to='/create' />
				<ProfileButton />
			</div>

			<div
				className='flex lg:hidden w-9 h-9 justify-center items-center rounded-full border-2 border-transparent hover:border-slate-300 transition-colors duration-500'
				onClick={toggleSideBar}>
				{sidebarToggle ? (
					<span className='block transition-all duration-1000'>
						<AiOutlineClose size={24} />
					</span>
				) : (
					<span className='block transition-all duration-1000'>
						<RxHamburgerMenu size={24} />
					</span>
				)}
			</div>
		</header>
	)
}

export default Navbar
