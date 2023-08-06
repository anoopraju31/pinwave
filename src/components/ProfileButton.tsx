import Image from 'next/image'
import React from 'react'

const ProfileButton = () => {
	return (
		<div className='w-8 h-8 rounded-full border border-gray-700'>
			<Image
				src='/anoop.jpg'
				alt='profile'
				className='w-full h-full object-cover  rounded-full'
				width={50}
				height={50}
			/>
		</div>
	)
}

export default ProfileButton
