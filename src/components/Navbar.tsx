import Link from 'next/link'
import { RxHamburgerMenu } from 'react-icons/rx'

const Navbar = () => {
	return (
		<header className='h-16 px-4 flex items-center justify-between sticky top-0 bg-slate-600 z-50'>
			<div className='text-lg font-bold'>
				<Link href='/'> PinWave </Link>
			</div>

			<div className='block lg:hidden text-lg font-bold'>
				<RxHamburgerMenu size={22} />
			</div>
		</header>
	)
}

export default Navbar
