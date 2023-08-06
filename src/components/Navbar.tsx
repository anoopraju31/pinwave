import Link from 'next/link'
import { RxHamburgerMenu } from 'react-icons/rx'
import { NavLink, ProfileButton, SearchBar } from '.'

const Navbar = () => {
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

			<div className='block lg:hidden text-lg font-bold'>
				<RxHamburgerMenu size={22} />
			</div>
		</header>
	)
}

export default Navbar
