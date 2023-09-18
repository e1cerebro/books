import React, { useContext } from 'react'
import BookShow from './BookShow';
import BooksContext from '../context/books';

const BookList = () => {
	const { books } = useContext(BooksContext);

	const renderedBooks = books.map((book, id) => {
		return <BookShow key={id} book={book} />
	});

	return (
		<div>
			<h1 className="title text-2xl mb-2">Reading List</h1>
			<div className='book-list'>{renderedBooks}</div>
		</div>
	)
}

export default BookList