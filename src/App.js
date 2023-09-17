import { useEffect, useState } from 'react';
import './App.css';
import BookCreate from './component/BookCreate';
import BookList from './component/BookList';
import axios from 'axios';

function App() {
	const [books, setBooks] = useState([]);

	const fetchBooks = async () => {
		const response = await axios.get(' http://localhost:3001/books');
		setBooks(response.data);
	}

	useEffect(() => {
		fetchBooks();
	}, []);
	

	const createBook = async (title) => {
		const response = await axios.post(' http://localhost:3001/books', {
			title
		});

		setBooks([ ...books, response.data ]);
	}

	const deleteBookByID = async (id) => {
		const response = await axios.delete(`http://localhost:3001/books/${id}`);
		const updatedBooks = books.filter(book => book.id !== id);
		setBooks(updatedBooks);
	}

	const editBookTitle = async (id, title) => {
		const response = await axios.put(`http://localhost:3001/books/${id}`, { title });
		const updatedBooks = books.map(book => {
			if(book.id === id) {
				return {...book, ...response.data}
			}
			return book;
		});

		setBooks(updatedBooks);
	}

	return (
		<div className="App">
			<BookCreate onCreate={createBook} />
			<BookList books={books} onDelete={deleteBookByID} onEdit={editBookTitle} />
		</div>
	);
}

export default App;
