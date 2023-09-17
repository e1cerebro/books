import React, { useState } from 'react'

const BookEdit = ({book, onSubmit}) => {
	const [bookTitle, setBookTitle] = useState(book.title);

	const handleFormSubmit = () => {
		onSubmit(book.id, bookTitle);
	}

	const handleInputChange = (event) => {
		setBookTitle(event.target.value);
	}

	return (
		<div>
			<form action="" onSubmit={handleFormSubmit}>

				<input type='text' className='input mb-2' value={bookTitle} onChange={handleInputChange} /> 
				<button type='submit' className='save btn'>Save</button>
			</form>
		</div>
	)
}

export default BookEdit