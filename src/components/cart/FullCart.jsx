import "./cart.css";
import { CartItem } from "./CartItem";

export const FullCart = ({ selectedBooks, totalPrice }) => {
    return (
        <>
            <div className="cart__list">
                <div className="cart__item list__title">
                    <div className="item__name">Book name</div>
                    <div className="item__count">Сount</div>
                    <div className="item__total-price">Price</div>
                </div>
                {selectedBooks.map((el) => (
                    <CartItem key={el.id} item={el} />
                ))}
            </div>
            <div className="cart__total-price">Total price, ${totalPrice}</div>
        </>
    );
}