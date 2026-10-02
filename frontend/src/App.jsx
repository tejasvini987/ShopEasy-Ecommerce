import { BrowserRouter, Routes, Route } from "react-router-dom";

// Components
import Navbar from "./components/Navbar";

// Pages
import ProductList from "./pages/ProductList";
import ProductDetails from "./pages/ProductDetails";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import Register from "./pages/Register";
import Login from "./pages/Login";

function App() {
    return (
        <BrowserRouter>

            {/* Navbar */}
            <Navbar />

            <Routes>

                {/* Product List / Home */}
                <Route
                    path="/"
                    element={<ProductList />}
                />

                {/* Product Details */}
                <Route
                    path="/products/:id"
                    element={<ProductDetails />}
                />

                {/* Cart */}
                <Route
                    path="/cart"
                    element={<Cart />}
                />

                {/* Checkout */}
                <Route
                    path="/checkout"
                    element={<Checkout />}
                />

                {/* Registration */}
                <Route
                    path="/register"
                    element={<Register />}
                />

                {/* Login */}
                <Route
                    path="/login"
                    element={<Login />}
                />

            </Routes>

        </BrowserRouter>
    );
}

export default App;