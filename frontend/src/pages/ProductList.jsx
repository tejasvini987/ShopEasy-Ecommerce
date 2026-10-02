import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../redux/productSlice";
import { useNavigate } from "react-router-dom";

import SearchBar from "../components/SearchBar";
import Filter from "../components/Filter";
import Sort from "../components/Sort";

function ProductList() {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const products = useSelector(
        (state) => state.products.products
    );

    const loading = useSelector(
        (state) => state.products.loading
    );

    const error = useSelector(
        (state) => state.products.error
    );

    const [search, setSearch] = useState("");

    const [filters, setFilters] = useState({
        category: "",
        brand: "",
        color: "",
        size: ""
    });

    const [sort, setSort] = useState("");

    const [visibleCount, setVisibleCount] = useState(4);

    // Lazy loading reference
    const loaderRef = useRef(null);

    // ================= FETCH PRODUCTS =================

    useEffect(() => {
        dispatch(fetchProducts());
    }, [dispatch]);

    // ================= SEARCH + FILTER =================

    const filteredProducts = products.filter((product) => {

        const searchText = search.toLowerCase().trim();

        const matchesSearch =
            !searchText ||
            product.name.toLowerCase().includes(searchText) ||
            product.brand.toLowerCase().includes(searchText) ||
            product.category.toLowerCase().includes(searchText);

        const matchesCategory =
            !filters.category ||
            product.category === filters.category;

        const matchesBrand =
            !filters.brand ||
            product.brand === filters.brand;

        const matchesColor =
            !filters.color ||
            product.color.includes(filters.color);

        const matchesSize =
            !filters.size ||
            product.size.includes(filters.size);

        return (
            matchesSearch &&
            matchesCategory &&
            matchesBrand &&
            matchesColor &&
            matchesSize
        );
    });

    // ================= SORTING =================

    const sortedProducts = [...filteredProducts].sort(
        (a, b) => {

            if (sort === "priceLow") {
                return a.price - b.price;
            }

            if (sort === "priceHigh") {
                return b.price - a.price;
            }

            if (sort === "popularityLow") {
                return a.popularity - b.popularity;
            }

            if (sort === "popularityHigh") {
                return b.popularity - a.popularity;
            }

            return 0;
        }
    );

    // ================= LAZY LOADING =================

    useEffect(() => {

        const observer = new IntersectionObserver(
            (entries) => {

                if (
                    entries[0].isIntersecting &&
                    visibleCount < sortedProducts.length
                ) {
                    setVisibleCount(
                        (prev) => prev + 4
                    );
                }

            },
            {
                rootMargin: "200px"
            }
        );

        const currentLoader = loaderRef.current;

        if (currentLoader) {
            observer.observe(currentLoader);
        }

        return () => {

            if (currentLoader) {
                observer.unobserve(currentLoader);
            }

        };

    }, [
        visibleCount,
        sortedProducts.length
    ]);

    // ================= LOADING =================

    if (loading) {
        return (
            <div className="container text-center mt-5">
                <h2>Loading Products...</h2>
            </div>
        );
    }

    // ================= ERROR =================

    if (error) {
        return (
            <div className="container text-center mt-5">

                <h2 className="text-danger">
                    Error Loading Products
                </h2>

                <p>{error}</p>

            </div>
        );
    }

    // ================= UI =================

    return (
        <div className="container mt-5">

            {/* SEARCH */}

            <SearchBar
                onSearch={setSearch}
            />

            <h1 className="text-center mb-4 mt-4">
                E-Commerce Products
            </h1>

            <div className="row">

                {/* FILTER SIDEBAR */}

                <div className="col-md-3">

                    <Filter
                        filters={filters}
                        setFilters={setFilters}
                    />

                </div>

                {/* PRODUCTS SECTION */}

                <div className="col-md-9">

                    {/* SORT */}

                    <Sort
                        sort={sort}
                        setSort={setSort}
                    />

                    <p className="mb-3">
                        {sortedProducts.length} product(s) found
                    </p>

                    <div className="row">

                        {sortedProducts
                            .slice(0, visibleCount)
                            .map((product) => (

                                <div
                                    className="col-md-6 col-lg-4 mb-4"
                                    key={product._id}
                                >

                                    <div className="card h-100 shadow">

                                        {/* PRODUCT IMAGE */}

                                        <img
                                            src={product.image}
                                            className="card-img-top"
                                            alt={product.name}
                                            loading="lazy"
                                            style={{
                                                height: "220px",
                                                objectFit: "cover"
                                            }}
                                        />

                                        {/* PRODUCT DETAILS */}

                                        <div className="card-body">

                                            <h5 className="card-title">
                                                {product.name}
                                            </h5>

                                            <p className="text-muted">
                                                {product.brand}
                                            </p>

                                            <h5>
                                                ₹{product.price}
                                            </h5>

                                            <p>
                                                Category:{" "}
                                                {product.category}
                                            </p>

                                            <p>
                                                Popularity:{" "}
                                                {product.popularity}
                                            </p>

                                            {/* VIEW DETAILS */}

                                            <button
                                                className="btn btn-primary w-100"
                                                onClick={() =>
                                                    navigate(
                                                        `/products/${product._id}`
                                                    )
                                                }
                                            >
                                                View Details
                                            </button>

                                        </div>

                                    </div>

                                </div>

                            ))}

                    </div>

                    {/* LAZY LOADING TRIGGER */}

                    {visibleCount < sortedProducts.length && (
                        <div
                            ref={loaderRef}
                            className="text-center my-4"
                        >
                            <p className="text-muted">
                                Loading more products...
                            </p>
                        </div>
                    )}

                    {/* LOAD MORE BUTTON */}

                    {visibleCount < sortedProducts.length && (
                        <div className="text-center mt-3 mb-5">

                            <button
                                className="btn btn-primary px-5"
                                onClick={() =>
                                    setVisibleCount(
                                        (prev) => prev + 4
                                    )
                                }
                            >
                                Load More
                            </button>

                        </div>
                    )}

                    {/* NO PRODUCTS */}

                    {sortedProducts.length === 0 && (
                        <div className="text-center mt-5">

                            <h4>
                                No products found
                            </h4>

                        </div>
                    )}

                </div>

            </div>

        </div>
    );
}

export default ProductList;