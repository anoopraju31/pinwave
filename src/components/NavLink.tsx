import Link from 'next/link'

const NavLink = () => {
	return (
		<div className='px-4 py-2 hover:bg-black hover:text-white  rounded-full transition-colors duration-300'>
			<Link href='/'> Home </Link>
		</div>
	)
}

export default NavLink
