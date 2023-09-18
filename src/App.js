import { useEffect, useContext } from 'react';
import './App.css';
import BookCreate from './component/BookCreate';
import BookList from './component/BookList';
import BooksContext from './context/books';

function App() {
	const { fetchBooks } = useContext(BooksContext);

	useEffect(() => {
		fetchBooks();
	}, []);

	return (
		<div className="App">
			<BookCreate />
			<BookList />
		</div>
	);
}

export default App;
