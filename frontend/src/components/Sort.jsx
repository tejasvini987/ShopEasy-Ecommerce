function Sort({ sort, setSort }) {
    return (
        <div className="mb-4">

            <label className="fw-bold mb-2">
                Sort Products
            </label>

            <select
                className="form-select"
                value={sort}
                onChange={(e) => setSort(e.target.value)}
            >
                <option value="">
                    Default
                </option>

                <option value="priceLow">
                    Price: Low to High
                </option>

                <option value="priceHigh">
                    Price: High to Low
                </option>

                <option value="popularityLow">
                    Popularity: Low to High
                </option>

                <option value="popularityHigh">
                    Popularity: High to Low
                </option>
            </select>

        </div>
    );
}

export default Sort;