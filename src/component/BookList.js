import React from 'react'
import BookShow from './BookShow'

const BookList = ({books, onDelete, onEdit}) => {
	const renderedBooks = books.map((book, id) => {
		return <BookShow key={id} book={book} onDelete={onDelete} onEdit={onEdit} />
	});

	return (
		<div>
			<h1 className="title text-2xl mb-2">Reading List</h1>
			<div className='book-list'>{renderedBooks}</div>
		</div>
	)
}

export default BookList