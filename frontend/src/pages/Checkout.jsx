import { useSelector, useDispatch } from "react-redux";
import { clearCart } from "../redux/cartSlice";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

function Checkout() {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const cartItems = useSelector(
        (state) => state.cart.items
    );

    const [orderPlaced, setOrderPlaced] = useState(false);

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        address: "",
        city: "",
        pincode: "",
        phone: ""
    });

    const totalAmount = cartItems.reduce(
        (total, item) =>
            total + item.price * item.quantity,
        0
    );

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        setOrderPlaced(true);

        dispatch(clearCart());
    };

    if (cartItems.length === 0 && !orderPlaced) {
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

    if (orderPlaced) {
        return (
            <div className="container text-center mt-5">

                <div className="card p-5 shadow">

                    <h1 className="text-success">
                        🎉 Order Placed Successfully!
                    </h1>

                    <p className="mt-3">
                        Thank you for your purchase.
                    </p>

                    <button
                        className="btn btn-primary mt-3"
                        onClick={() => navigate("/")}
                    >
                        Continue Shopping
                    </button>

                </div>

            </div>
        );
    }

    return (
        <div className="container mt-5">

            <h1 className="text-center mb-4">
                Checkout
            </h1>

            <div className="row">

                {/* Checkout Form */}

                <div className="col-md-7">

                    <div className="card p-4 shadow-sm">

                        <h4 className="mb-4">
                            Delivery Information
                        </h4>

                        <form onSubmit={handleSubmit}>

                            <div className="mb-3">
                                <label className="form-label">
                                    Full Name
                                </label>

                                <input
                                    type="text"
                                    name="name"
                                    className="form-control"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                />
                            </div>

                            <div className="mb-3">
                                <label className="form-label">
                                    Email
                                </label>

                                <input
                                    type="email"
                                    name="email"
                                    className="form-control"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                />
                            </div>

                            <div className="mb-3">
                                <label className="form-label">
                                    Phone
                                </label>

                                <input
                                    type="tel"
                                    name="phone"
                                    className="form-control"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    required
                                />
                            </div>

                            <div className="mb-3">
                                <label className="form-label">
                                    Address
                                </label>

                                <textarea
                                    name="address"
                                    className="form-control"
                                    rows="3"
                                    value={formData.address}
                                    onChange={handleChange}
                                    required
                                />
                            </div>

                            <div className="row">

                                <div className="col-md-6 mb-3">

                                    <label className="form-label">
                                        City
                                    </label>

                                    <input
                                        type="text"
                                        name="city"
                                        className="form-control"
                                        value={formData.city}
                                        onChange={handleChange}
                                        required
                                    />

                                </div>

                                <div className="col-md-6 mb-3">

                                    <label className="form-label">
                                        Pincode
                                    </label>

                                    <input
                                        type="text"
                                        name="pincode"
                                        className="form-control"
                                        value={formData.pincode}
                                        onChange={handleChange}
                                        required
                                    />

                                </div>

                            </div>

                            <button
                                type="submit"
                                className="btn btn-success w-100 mt-3"
                            >
                                Place Order
                            </button>

                        </form>

                    </div>

                </div>

                {/* Order Summary */}

                <div className="col-md-5">

                    <div className="card p-4 shadow-sm">

                        <h4>
                            Order Summary
                        </h4>

                        {cartItems.map((item) => (

                            <div
                                key={item._id}
                                className="d-flex justify-content-between mt-3"
                            >

                                <span>
                                    {item.name} × {item.quantity}
                                </span>

                                <span>
                                    ₹{item.price * item.quantity}
                                </span>

                            </div>

                        ))}

                        <hr />

                        <h4>
                            Total: ₹{totalAmount}
                        </h4>

                    </div>

                </div>

            </div>

        </div>
    );
}

export default Checkout;