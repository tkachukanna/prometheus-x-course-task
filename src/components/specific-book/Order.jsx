import { useEffect, useState } from "react";
import { useSelectedBooks } from "../../hooks/use-selectedBooks";
import { LocalStorageService, LS_KEYS } from "../../services/localStorage";

export const Order = ({ id, book }) => {
    const [totalPrice, setTotalPrice] = useState(book.price);
    const selectedBooks = useSelectedBooks();

    const getCount = () => {
        for (let i = 0; i < selectedBooks.length; i++) {
            if (selectedBooks[i].id == id) {
                return selectedBooks[i].count;
            }
        }
        return 1;
    }

    const [count, setCount] = useState(getCount());

    useEffect(() => {
        if (count <= 0 || count > 42 || count % 1 !== 0) {
            setCount(count / count);
        } else {
            setTotalPrice((book.price * count).toFixed(2));
        }
    }, [count]);

    const handleAddCount = (value) => {
        setCount(value);
    }

    const handleAddToCart = () => {
        for (let i = 0; i < selectedBooks.length; i++) {
            if (selectedBooks[i].id == book.id) {
                selectedBooks[i].count = count;
                LocalStorageService.set(LS_KEYS.SELECTEDBOOKS, selectedBooks);
                return null;
            }
        }
        const cartItem = {
            id: book.id,
            title: book.title,
            count: count,
            totalPrice: totalPrice
        }
        selectedBooks.push(cartItem);
        LocalStorageService.set(LS_KEYS.SELECTEDBOOKS, selectedBooks);
    }

    return (
        <div className="specific-book__actions order">
            <div className="order__item">
                <p className="specific-book__price_label">Price, $</p>
                <p className="specific-book__price_value">{book.price}</p>
            </div>
            <div className="order__item">
                <p className="specific-book__count_label">Count</p>
                <input className="specific-book__count_value" type="number" min="1" max="42" onChange={(e) => handleAddCount(+e.target.value)} value={count} />
            </div>
            <div className="order__item">
                <p className="specific-book__total-price_label">Total price, $</p>
                <p className="specific-book__total-price_value">{totalPrice}</p>
            </div>
            <button
                className="specific-book__cart-button"
                type="button"
                onClick={() => {
                    handleAddToCart();
                }}
            >
                Add to cart
            </button>
        </div>
    );
}