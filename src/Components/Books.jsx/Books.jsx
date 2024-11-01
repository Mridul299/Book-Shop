import { useEffect, useState } from "react";
import Book from "../Book/Book";


const Books = () => {
    const [books,setBooks] = useState([]);

    useEffect(()=>{
        fetch('booksData.json')
        .then(res => res.json())
        .then(data => setBooks(data))
    },[])

    return (
        <div>
            <h2 className="text-4xl font-bold text-center">Books</h2>
            <p>books:{books.length}</p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1 gap-2">
                {
                    books.map(book => <Book key={book.id} book={book}></Book>)
                }
            </div>
        </div>
    );
};

export default Books;