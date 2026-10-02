import { useSelector, useDispatch } from "react-redux";
import {
    removeFromCart,
    increaseQuantity,
    decreaseQuantity,
    clearCart
} from "../redux/cartSlice";
import { useNavigate } from "react-router-dom";

function Cart() {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const cartItems = useSelector(
        (state) => state.cart.items
    );

    const totalAmount = cartItems.reduce(
        (total, item) =>
            total + item.price * item.quantity,
        0
    );

    if (cartItems.length === 0) {
        return (
            <div className="container text-center mt-5">
                <h2>Your Cart is Empty 🛒</h2>

                <button
                    className="btn btn-primary mt-3"
                    onClick={() => navigate("/")}
                >
                    Continue Shopping
                </button>
            </div>
        );
    }

    return (
        <div className="container mt-5">

            <h1 className="text-center mb-4">
                Shopping Cart 🛒
            </h1>

            {cartItems.map((item) => (

                <div
                    className="card mb-3 shadow-sm"
                    key={item._id}
                >

                    <div className="row align-items-center p-3">

                        {/* Image */}
                        <div className="col-md-2">

                            <img
                                src={item.image}
                                alt={item.name}
                                className="img-fluid rounded"
                                style={{
                                    height: "120px",
                                    width: "120px",
                                    objectFit: "cover"
                                }}
                            />

                        </div>

                        {/* Product Details */}
                        <div className="col-md-4">

                            <h5>{item.name}</h5>

                            <p className="text-muted">
                                {item.brand}
                            </p>

                            <h6>
                                ₹{item.price}
                            </h6>

                        </div>

                        {/* Quantity */}
                        <div className="col-md-3">

                            <button
                                className="btn btn-outline-secondary"
                                onClick={() =>
                                    dispatch(
                                        decreaseQuantity(
                                            item._id
                                        )
                                    )
                                }
                            >
                                −
                            </button>

                            <span className="mx-3 fw-bold">
                                {item.quantity}
                            </span>

                            <button
                                className="btn btn-outline-secondary"
                                onClick={() =>
                                    dispatch(
                                        increaseQuantity(
                                            item._id
                                        )
                                    )
                                }
                            >
                                +
                            </button>

                        </div>

                        {/* Remove */}
                        <div className="col-md-3">

                            <p className="fw-bold">
                                ₹{item.price * item.quantity}
                            </p>

                            <button
                                className="btn btn-danger"
                                onClick={() =>
                                    dispatch(
                                        removeFromCart(
                                            item._id
                                        )
                                    )
                                }
                            >
                                Remove
                            </button>

                        </div>

                    </div>

                </div>

            ))}

            {/* Total */}

            <div className="card p-4 shadow-sm">

                <h3>
                    Total: ₹{totalAmount}
                </h3>

                <div className="mt-3">

                    <button
                        className="btn btn-warning me-2"
                        onClick={() =>
                            dispatch(clearCart())
                        }
                    >
                        Clear Cart
                    </button>

                    <button
                        className="btn btn-success"
                        onClick={() =>
                            navigate("/checkout")
                        }
                    >
                        Proceed to Checkout
                    </button>

                </div>

            </div>

        </div>
    );
}

export default Cart;