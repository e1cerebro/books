import { createContext, useState } from "react";
import axios from 'axios';

const BooksContext = createContext();

const Provider = ({ children }) => {
	const [books, setBooks] = useState([]);

	const valuesToShare = {
		books,
		fetchBooks: async () => {
			const response = await axios.get(' http://localhost:3001/books');
			setBooks(response.data);
		},
		createBook: async (title) => {
			const response = await axios.post(' http://localhost:3001/books', {
				title
			});
	
			setBooks([ ...books, response.data ]);
		},
		deleteBookByID: async (id) => {
			await axios.delete(`http://localhost:3001/books/${id}`);
			const updatedBooks = books.filter(book => book.id !== id);
			setBooks(updatedBooks);
		},
		editBookTitle: async (id, title) => {
			const response = await axios.put(`http://localhost:3001/books/${id}`, { title });
			const updatedBooks = books.map(book => {
				if(book.id === id) {
					return {...book, ...response.data}
				}
				return book;
			});
	
			setBooks(updatedBooks);
		}
	}

	return (
		<BooksContext.Provider value={valuesToShare}>{children}</BooksContext.Provider>
	);
}

export { Provider };
export default BooksContext;