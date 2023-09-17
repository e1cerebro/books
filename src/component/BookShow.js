import React, { useState } from 'react'
import BookEdit from './BookEdit';

const BookShow = ({book, onDelete, onEdit}) => {
	const [showEdit, setShowEdit] = useState(false);

	const handleDeleteClick = () => {
		onDelete(book.id);
	}

	const showEditForm = () => {
		setShowEdit(true);
	}

	const handleSubmit = (id, title) => {
		onEdit(id, title);
		setShowEdit(false);
	}

	return (
		<div className="book">
			{ showEdit && <BookEdit book={book} onSubmit={handleSubmit} />}
			{!showEdit && 
				<>
					<img src={`https://picsum.photos/seed/${book.id}/300/200`} />
					<h2 className='text-lg'>{book.title}</h2> 
					<div className='flex gap-2 mt-4'>
						<button className='delete btn' onClick={handleDeleteClick}>Delete</button>
						<button className='edit btn' onClick={showEditForm}>Edit</button>
					</div>
				</>
			}
		</div>
	)
}

export default BookShow