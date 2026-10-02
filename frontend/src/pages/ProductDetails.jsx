import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import axios from "axios";

import { addToCart } from "../redux/cartSlice";

function ProductDetails() {

    const { id } = useParams();
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    // ================= FETCH PRODUCT =================

    useEffect(() => {

        const fetchProduct = async () => {

            try {

                const response = await axios.get(
                    `http://localhost:5000/api/products/${id}`
                );

                setProduct(response.data.product);

            } catch (error) {

                console.error(error);
                setError("Unable to load product");

            } finally {

                setLoading(false);

            }
        };

        fetchProduct();

    }, [id]);

    // ================= LOADING =================

    if (loading) {

        return (
            <div className="container text-center mt-5">

                <h2>
                    Loading Product...
                </h2>

            </div>
        );

    }

    // ================= ERROR =================

    if (error) {

        return (
            <div className="container text-center mt-5">

                <h2 className="text-danger">
                    {error}
                </h2>

            </div>
        );

    }

    // ================= PRODUCT NOT FOUND =================

    if (!product) {

        return (
            <div className="container text-center mt-5">

                <h2>
                    Product Not Found
                </h2>

            </div>
        );

    }

    // ================= ADD TO CART =================

    const handleAddToCart = () => {

        dispatch(addToCart(product));

        alert("Product added to cart!");

    };

    // ================= UI =================

    return (
        <div className="container mt-5">

            {/* Back Button */}

            <button
                className="btn btn-secondary mb-4"
                onClick={() => navigate(-1)}
            >
                ← Back
            </button>

            <div className="row">

                {/* ================= PRODUCT IMAGE ================= */}

                <div className="col-md-6">

                    <img
                        src={product.image}
                        alt={product.name}
                        className="img-fluid rounded shadow"
                        loading="lazy"
                        style={{
                            width: "100%",
                            height: "450px",
                            objectFit: "cover"
                        }}
                    />

                </div>

                {/* ================= PRODUCT DETAILS ================= */}

                <div className="col-md-6">

                    <h1>
                        {product.name}
                    </h1>

                    <p className="text-muted">
                        Brand: {product.brand}
                    </p>

                    <h2 className="text-primary">
                        ₹{product.price}
                    </h2>

                    <p>
                        {product.description}
                    </p>

                    <p>
                        <strong>
                            Category:
                        </strong>{" "}
                        {product.category}
                    </p>

                    <p>
                        <strong>
                            Color:
                        </strong>{" "}
                        {product.color.join(", ")}
                    </p>

                    <p>
                        <strong>
                            Size:
                        </strong>{" "}
                        {product.size.join(", ")}
                    </p>

                    <p>
                        <strong>
                            Stock:
                        </strong>{" "}
                        {product.stock}
                    </p>

                    <p>
                        <strong>
                            Popularity:
                        </strong>{" "}
                        {product.popularity}
                    </p>

                    {/* Add To Cart */}

                    <button
                        className="btn btn-success btn-lg"
                        disabled={product.stock === 0}
                        onClick={handleAddToCart}
                    >
                        {product.stock === 0
                            ? "Out of Stock"
                            : "Add to Cart"}
                    </button>

                </div>

            </div>

        </div>
    );
}

export default ProductDetails;