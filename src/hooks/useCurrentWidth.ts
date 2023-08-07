'use client'

import { useState, useLayoutEffect } from 'react'

const useCurrentWidth = () => {
	const [currentWith, setCurrentWidth] = useState<number>(0)

	const handleResize = () => {
		setCurrentWidth(window.innerWidth)
	}

	useLayoutEffect(() => {
		addEventListener('resize', handleResize)

		return () => {
			window.removeEventListener('resize', handleResize)
		}
	}, [])

	return currentWith
}

export default useCurrentWidth
