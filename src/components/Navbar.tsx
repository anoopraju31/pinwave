'use client'

import Link from 'next/link'
import { RxHamburgerMenu } from 'react-icons/rx'
import { NavLink, ProfileButton, SearchBar } from '.'
import { useAppDispatch, useAppSelector } from '@/store'
import { toggle } from '@/features/sidebarToggleSlice'
import { useState } from 'react'

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
				className='block lg:hidden text-lg font-bold'
				onClick={toggleSideBar}>
				<RxHamburgerMenu size={22} />
			</div>
		</header>
	)
}

export default Navbar
