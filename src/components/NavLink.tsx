import { Url } from 'next/dist/shared/lib/router/router'
import Link from 'next/link'

type PageProps = {
	title: String
	to: String
}

const NavLink = ({ title, to }: PageProps) => {
	return (
		<div className='px-4 py-2 hover:bg-black hover:text-white  rounded-full transition-colors duration-300'>
			<Link href={`${to}`}> {title} </Link>
		</div>
	)
}

export default NavLink
