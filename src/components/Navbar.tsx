'use client'

import { useEffect } from 'react'
import Link from 'next/link'
import { RxHamburgerMenu } from 'react-icons/rx'
import { AiOutlineClose } from 'react-icons/ai'
import { useCurrentWidth } from '@/hooks'
import { useAppDispatch, useAppSelector } from '@/store'
import { toggle, close } from '@/features/sidebarToggleSlice'
import { NavLink, ProfileButton, SearchBar } from '.'

const Navbar = () => {
	const dispatch = useAppDispatch()
	const sidebarToggle = useAppSelector((state) => state.sidebarToggle)
	const currentWidth = useCurrentWidth()

	// * set sidebar open to false if width >= 1024
	useEffect(() => {
		if (currentWidth >= 1024) {
			dispatch(close())
		}
	}, [currentWidth, dispatch])

	const toggleSideBar = () => {
		dispatch(toggle())
	}

	return (
		<header className='h-16 px-4 flex items-center justify-between sticky top-0 bg-white text-gray-700 z-50'>
			{/* Logo */}
			<div className='text-lg font-bold'>
				<Link href='/'> PinWave </Link>
			</div>

			{/* Search */}
			<div className='hidden md:block w-2/5'>
				<SearchBar />
			</div>

			{/* Links */}
			<div className='hidden lg:flex justify-between items-center gap-4'>
				<NavLink title='Home' to='/' />
				<NavLink title='Create' to='/create' />
				<ProfileButton />
			</div>

			{/* Hamburger */}
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
