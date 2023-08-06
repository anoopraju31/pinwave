'use client'

import { useAppSelector } from '@/store'
import React from 'react'

const Sidebar = () => {
	const sidebarToggle = useAppSelector((state) => state.sidebarToggle)
	return (
		<div
			className={`w-full sm:w-64 h-[var(--sidebar-height)] z-50 fixed lg:sticky top-16 ${
				sidebarToggle ? 'left-0' : '-left-[100vw]'
			} bg-white`}>
			Sidebar
		</div>
	)
}

export default Sidebar
