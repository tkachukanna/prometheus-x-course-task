import { Link } from "react-router-dom";
import imageNotFound from "../../assets/images/imageNotFound.png";

export const Book = ({ book }) => {
    return (
        <div className="book">
            <Link to={`/prometheus-x-course-task/books/${book.id}`} className="book__cover">
                <img
                    src={book.image === "" ? imageNotFound : book.image}
                    alt={book.title}
                />
            </Link>
            <h5 className="book__name">
                {
                    (book.title.length > 24) ? book.title.slice(0, 23) + '...' : book.title
                }
            </h5>
            <div className="book__author">{book.author}</div>
            <div className="book__actions">
                <p className="book__price">{book.price}$</p>
                <Link to={`/prometheus-x-course-task/books/${book.id}`} className="book__view">View</Link>
            </div>
        </div>
    );
}