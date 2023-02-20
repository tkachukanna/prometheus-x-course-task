import "./cart.css";

export const CartItem = ({ item }) => {
    return (
        <div className="cart__item">
            <div className="item__name">{item.title}</div>
            <div className="item__count">{item.count}</div>
            <div className="item__total-price">${item.totalPrice}</div>
        </div>
    );
}