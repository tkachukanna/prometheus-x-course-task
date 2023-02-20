import { useState } from "react";
import { useBooks } from "../../hooks/use-books";
import { Book } from "./Book";
import lupa from "../../assets/icons/lupa.svg";
import "./books.css";

export const Books = () => {

    const books = useBooks();

    const [searchTerm, setSearchTerm] = useState("");
    const [selectedPrice, setSelectedPrice] = useState(0);

    const filterBooks = (book) => {
        if (searchTerm !== "" && selectedPrice === 0) {
            return book.title.toLowerCase().includes(searchTerm.toLowerCase());
        } else if (searchTerm !== "" && selectedPrice === 1) {
            return book.title.toLowerCase().includes(searchTerm.toLowerCase()) && book.price <= 15;
        } else if (searchTerm !== "" && selectedPrice === 2) {
            return book.title.toLowerCase().includes(searchTerm.toLowerCase()) && book.price >= 15 && book.price <= 30;
        } else if (searchTerm !== "" && selectedPrice === 3) {
            return book.title.toLowerCase().includes(searchTerm.toLowerCase()) && book.price >= 30;
        } else if (searchTerm === "" && selectedPrice === 1) {
            return book.price < 15;
        } else if (searchTerm === "" && selectedPrice === 2) {
            return book.price >= 15 && book.price <= 30;
        } else if (searchTerm === "" && selectedPrice === 3) {
            return book.price > 30;
        } else {
            return book;
        }
    }

    const handleAddSearchTerm = (value) => {
        setSearchTerm(value);
    }

    const handleAddSelectedPrice = (value) => {
        setSelectedPrice(value);
    }

    return (
        <section className="page-books">
            <form className="search__form" action="#">
                <input
                    className="search__input"
                    type="search"
                    onChange={(e) => handleAddSearchTerm(e.target.value)}
                />
                <div className="search__img">
                    <img src={lupa} alt="search" />
                </div>
                <select className="search__options" name="price" onChange={(e) => handleAddSelectedPrice(+e.target.value)}>
                    <option value="0">All books</option>
                    <option value="1">less then 15$</option>
                    <option value="2">15-30$</option>
                    <option value="3">30$ and more</option>
                </select>
            </form>
            <section className="booklist">
                {books?.filter((book) => filterBooks(book)).map(el => (
                    <Book key={el.id} book={el} />
                ))}
            </section>
        </section>
    );
}