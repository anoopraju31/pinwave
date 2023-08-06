import { IoMdSearch } from 'react-icons/io'

const SearchBar = () => {
	return (
		<div className='flex justify-start items-center w-full px-2 rounded-full bg-slate-200 text-gray-500 border-none outline-none focus-within:shadow-sm'>
			<IoMdSearch fontSize={21} className='' />
			<input
				type='text'
				placeholder='Search'
				className='p-2 w-full outline-none bg-slate-200  rounded-full'
			/>
		</div>
	)
}

export default SearchBar
