'use client'

import { useState, useEffect } from 'react'

const getWidth = () =>
	window.innerWidth ||
	document.documentElement.clientWidth ||
	document.body.clientWidth

const useCurrentWidth = () => {
	const [currentWith, setCurrentWidth] = useState<Number>(getWidth())

	const handleResize = () => {
		setCurrentWidth(getWidth())
	}

	useEffect(() => {
		addEventListener('resize', handleResize)

		return () => {
			window.removeEventListener('resize', handleResize)
		}
	}, [])

	return currentWith
}

export default useCurrentWidth
