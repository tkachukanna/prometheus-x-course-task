import { useEffect, useState } from "react";
import { LocalStorageService, LS_KEYS } from "../../services/localStorage";
import { Emptycart } from "./EmptyCart";
import { FullCart } from "./FullCart";
import { useSelectedBooks } from "../../hooks/use-selectedBooks";
import "./cart.css";

export const Cart = () => {

    const selectedBooks = useSelectedBooks();

    const getTotalPrice = () => {
        let totalPrice = 0;
        if (selectedBooks.length > 0) {
            for (let i = 0; i < selectedBooks.length; i++) {
                totalPrice += +selectedBooks[i].totalPrice;
            }
            return totalPrice.toFixed(2);
        } else {
            return 0;
        }
    }

    const [totalPrice, setTotalPrice] = useState(
        getTotalPrice()
    );

    const [isButtonDisabled, setIsButtonDisabled] = useState(false);

    useEffect(() => {
        if (selectedBooks.length > 0) {
            setIsButtonDisabled(false);
            document.getElementById('purchase').classList.remove('purchase__disabled');
            document.getElementById('purchase').classList.add('cart__purchase');
        } else {
            setIsButtonDisabled(true);
            document.getElementById('purchase').classList.add('purchase__disabled');
            document.getElementById('purchase').classList.remove('cart__purchase');
        }
    }, [selectedBooks])

    const handleDeleteAllSelectedBooks = () => {
        LocalStorageService.remove(LS_KEYS.SELECTEDBOOKS);
    }

    return (
        <section className="cart">
            <button
                id="purchase"
                className="cart__purchase"
                disabled={isButtonDisabled}
                onClick={() => {
                    handleDeleteAllSelectedBooks();
                }}
            >
                Purchase
            </button>
            {
                selectedBooks.length !== 0 ? <FullCart selectedBooks={selectedBooks} totalPrice={totalPrice} /> : <Emptycart />
            }
        </section>
    );
}