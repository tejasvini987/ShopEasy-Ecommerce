import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function Navbar() {

    const cartItems = useSelector(
        (state) => state.cart.items
    );

    const cartCount = cartItems.reduce(
        (total, item) => total + item.quantity,
        0
    );

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">

            <div className="container">

                {/* Logo */}

                <Link
                    to="/"
                    className="navbar-brand"
                >
                    ShopEasy
                </Link>

                {/* Navigation */}

                <div className="navbar-nav ms-auto">

                    {/* Home */}

                    <Link
                        to="/"
                        className="nav-link"
                    >
                        Home
                    </Link>

                    {/* Products */}

                    <Link
                        to="/"
                        className="nav-link"
                    >
                        Products
                    </Link>

                    {/* Register */}

                    <Link
                        to="/register"
                        className="nav-link"
                    >
                        Register
                    </Link>

                    {/* Login */}

                    <Link
                        to="/login"
                        className="nav-link"
                    >
                        Login
                    </Link>

                    {/* Cart */}

                    <Link
                        to="/cart"
                        className="nav-link"
                    >
                        🛒 Cart ({cartCount})
                    </Link>

                </div>

            </div>

        </nav>
    );
}

export default Navbar;