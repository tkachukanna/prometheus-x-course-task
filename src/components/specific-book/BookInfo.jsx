import { useParams } from "react-router-dom";
import { useState } from "react";
import { Order } from "./Order";
import imageNotFound from "../../assets/images/imageNotFound.png";
import { useBooks } from "../../hooks/use-books";
import "./bookInfo.css";


export const BookInfo = () => {

    const { id } = useParams();

    const books = useBooks();
    const [book, setBook] = useState(books[id - 1]);

    return (
        <section>
            {book && (
                <section className="specific-book">
                    <div className="specific-book__cover">
                        <img src={book.image === "" ? imageNotFound : book.image}
                            alt={book.title} />
                    </div>

                    <div className="specific-book__summary">
                        <p className="specific-book__name"><b>Book name: </b>{book.title}</p>
                        <p className="specific-book__author"><b>Book author: </b>{book.author}</p>
                        <p className="specific-book__short-description">{book.shortDescription}</p>
                    </div>

                    <Order id={id} book={book} />

                    <div className="specific-book__description">
                        {book.description}
                    </div>
                </section>
            )}
        </section>
    );
}