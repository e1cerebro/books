import React, { useState, useContext } from 'react'
import BooksContext from '../context/books';

const BookCreate = ({onCreate}) => {
	const [title, setTitle] = useState('');
	const { createBook } = useContext(BooksContext);

	const handleInputChange = (event) => {
		setTitle(event.target.value);
	}

	const handleFormSubmit = (event) => {
		event.preventDefault();
		createBook(title);
		setTitle('');
	}

	return (
		<div className='w-2/5 mx-auto p-3'>
			<h1 className='text-xl font-semibold mb-4'>Create Book</h1>
			<form onSubmit={handleFormSubmit} className='flex justify-center flex-col'>
				<label htmlFor="title">Title</label>
				<input type="text" name="title" placeholder='title here...' value={title} onChange={handleInputChange} id="title" className='border-4 border-slate-50 mb-2 p-4 focus:shadow-lg focus:	shadow-red-600 focus:border-y-orange-500' />
				<button type="submit" className='bg-rose-800 text-white px-8 py-4 rounded-md transition-all hover:bg-rose-700'>Create</button>
			</form>
		</div>
	)
}

export default BookCreate