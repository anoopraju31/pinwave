import { IoMdSearch } from 'react-icons/io'

const SearchBar = () => {
	return (
		<div className='flex justify-start items-center w-full px-2 rounded-full bg-white border-none outline-none focus-within:shadow-sm'>
			<IoMdSearch fontSize={21} className='ml-1' />
			<input
				type='text'
				placeholder='Search'
				className='p-2 w-full bg-white outline-none'
			/>
		</div>
	)
}

export default SearchBar
