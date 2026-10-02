import { useSelector } from "react-redux";

function Filter({ filters, setFilters }) {
    const products = useSelector(
        (state) => state.products.products
    );

    const categories = [
        ...new Set(products.map((product) => product.category))
    ];

    const brands = [
        ...new Set(products.map((product) => product.brand))
    ];

    const colors = [
        ...new Set(
            products.flatMap((product) => product.color)
        )
    ];

    const sizes = [
        ...new Set(
            products.flatMap((product) => product.size)
        )
    ];

    const handleChange = (type, value) => {
        setFilters({
            ...filters,
            [type]: value
        });
    };

    return (
        <div className="card p-3 mb-4 shadow-sm">

            <h5 className="mb-3">Filters</h5>

            {/* Category */}
            <label className="fw-bold">Category</label>

            <select
                className="form-select mb-3"
                value={filters.category}
                onChange={(e) =>
                    handleChange("category", e.target.value)
                }
            >
                <option value="">All Categories</option>

                {categories.map((category) => (
                    <option key={category} value={category}>
                        {category}
                    </option>
                ))}
            </select>

            {/* Brand */}
            <label className="fw-bold">Brand</label>

            <select
                className="form-select mb-3"
                value={filters.brand}
                onChange={(e) =>
                    handleChange("brand", e.target.value)
                }
            >
                <option value="">All Brands</option>

                {brands.map((brand) => (
                    <option key={brand} value={brand}>
                        {brand}
                    </option>
                ))}
            </select>

            {/* Color */}
            <label className="fw-bold">Color</label>

            <select
                className="form-select mb-3"
                value={filters.color}
                onChange={(e) =>
                    handleChange("color", e.target.value)
                }
            >
                <option value="">All Colors</option>

                {colors.map((color) => (
                    <option key={color} value={color}>
                        {color}
                    </option>
                ))}
            </select>

            {/* Size */}
            <label className="fw-bold">Size</label>

            <select
                className="form-select"
                value={filters.size}
                onChange={(e) =>
                    handleChange("size", e.target.value)
                }
            >
                <option value="">All Sizes</option>

                {sizes.map((size) => (
                    <option key={size} value={size}>
                        {size}
                    </option>
                ))}
            </select>

        </div>
    );
}

export default Filter;