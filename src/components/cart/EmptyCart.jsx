import "./cart.css";
import cart from "../../assets/icons/cart.svg";

export const Emptycart = () => {
    return (
        <section className="empty-cart">
            <img className="empty-cart__image" src={cart} alt="Cart empty" />
            <p className="empty-cart__text">Cart empty...</p>
        </section>
    );
}