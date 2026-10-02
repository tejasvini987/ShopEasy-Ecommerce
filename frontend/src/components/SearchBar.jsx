import { useState } from "react";
import { useSelector } from "react-redux";

function SearchBar({ onSearch }) {
    const [search, setSearch] = useState("");

    const products = useSelector(
        (state) => state.products.products
    );

    // Search products
    const filteredProducts = products.filter((product) => {
        const searchText = search.toLowerCase().trim();

        return (
            product.name.toLowerCase().includes(searchText) ||
            product.brand.toLowerCase().includes(searchText) ||
            product.category.toLowerCase().includes(searchText)
        );
    });

    // Auto suggestions
    const suggestions = search
        ? products.filter((product) =>
              product.name
                  .toLowerCase()
                  .includes(search.toLowerCase()) ||
              product.brand
                  .toLowerCase()
                  .includes(search.toLowerCase())
          )
        : [];

    // Search + Cache
    const handleSearch = (value) => {
        setSearch(value);

        // Send search value to ProductList
        onSearch(value);

        // Cache last search
        if (value.trim()) {
            localStorage.setItem("lastSearch", value);
        }
    };

    // Select suggestion
    const handleSuggestionClick = (productName) => {
        setSearch(productName);
        onSearch(productName);

        localStorage.setItem(
            "lastSearch",
            productName
        );
    };

    return (
        <div className="container mb-4">

            <div className="position-relative">

                <input
                    type="text"
                    className="form-control form-control-lg"
                    placeholder="Search products..."
                    value={search}
                    onChange={(e) =>
                        handleSearch(e.target.value)
                    }
                />

                {/* Auto Suggestions */}
                {search && suggestions.length > 0 && (
                    <div
                        className="list-group position-absolute w-100"
                        style={{ zIndex: 1000 }}
                    >

                        {suggestions
                            .slice(0, 5)
                            .map((product) => (
                                <button
                                    key={product._id}
                                    type="button"
                                    className="list-group-item list-group-item-action"
                                    onClick={() =>
                                        handleSuggestionClick(
                                            product.name
                                        )
                                    }
                                >
                                    {product.name} - ₹
                                    {product.price}
                                </button>
                            ))}

                    </div>
                )}

            </div>

            {/* Search Result Count */}
            {search && (
                <p className="mt-3">
                    {filteredProducts.length} product(s) found
                </p>
            )}

        </div>
    );
}

export default SearchBar;