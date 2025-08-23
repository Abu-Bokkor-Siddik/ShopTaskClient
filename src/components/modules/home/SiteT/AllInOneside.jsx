function AllInOneside() {
  return (
    <div>
      <aside className="w-full md:w-64 p-4 bg-white rounded shadow mb-6 md:mb-0">
        <button className="bg-green-600 text-white px-4 py-2 rounded w-full mb-6">
          Filter
        </button>
        <div className="mb-6">
          <h3 className="font-bold mb-2">All Categories</h3>
          <ul className="space-y-1">
            <li>
              <input type="radio" name="cat" /> Fresh Fruit (25)
            </li>
            <li>
              <input type="radio" name="cat" checked />{" "}
              <span className="font-bold text-green-600">Vegetables (150)</span>
            </li>
            <li>
              <input type="radio" name="cat" /> Cooking (54)
            </li>
            <li>
              <input type="radio" name="cat" /> Snacks (41)
            </li>
            <li>
              <input type="radio" name="cat" /> Beverage (43)
            </li>
            <li>
              <input type="radio" name="cat" /> Beauty & Health (39)
            </li>
            <li>
              <input type="radio" name="cat" /> Bread & Bakery (15)
            </li>
          </ul>
        </div>
        <div className="mb-6">
          <h3 className="font-bold mb-2">Price</h3>
          <input type="range" min="50" max="1500" className="w-full" />
          <div className="flex justify-between text-xs mt-1">
            <span>$50</span>
            <span>$1500</span>
          </div>
        </div>
        <div className="mb-6">
          <h3 className="font-bold mb-2">Rating</h3>
          <div className="space-y-1">
            <label>
              <input type="checkbox" /> ⭐⭐⭐⭐⭐ 5.0
            </label>
            <br />
            <label>
              <input type="checkbox" checked /> ⭐⭐⭐⭐☆ 4.0 & up
            </label>
            <br />
            <label>
              <input type="checkbox" /> ⭐⭐⭐☆☆ 3.0 & up
            </label>
            <br />
            <label>
              <input type="checkbox" /> ⭐⭐☆☆☆ 2.0 & up
            </label>
            <br />
            <label>
              <input type="checkbox" /> ⭐☆☆☆☆ 1.0 & up
            </label>
          </div>
        </div>
        <div className="mb-6">
          <h3 className="font-bold mb-2">Popular Tag here</h3>
          <div className="flex flex-wrap gap-2">
            <span className="bg-green-100 text-green-600 px-2 py-1 rounded text-xs">
              Healthy
            </span>
            <span className="bg-green-100 text-green-600 px-2 py-1 rounded text-xs">
              Low fat
            </span>
            <span className="bg-green-100 text-green-600 px-2 py-1 rounded text-xs">
              Vegetarian
            </span>
            <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs">
              Kid foods
            </span>
            <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs">
              Vitamins
            </span>
            <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs">
              Bread
            </span>
          </div>
        </div>
        <div className="mb-6">
          <div className="bg-green-100 p-4 rounded text-center mb-2">
            <span className="text-orange-600 font-bold text-lg">
              79% Discount
            </span>
            <p className="text-xs">on your first order</p>
            <button className="bg-green-600 text-white px-3 py-1 rounded mt-2 text-xs">
              Shop Now
            </button>
          </div>
          <div>
            <h4 className="font-bold mb-2">Sale Products</h4>
            <ul className="space-y-2 text-sm">
              <li>
                Red Capsicum <b className="text-orange-600">$32.00</b>{" "}
                <span className="line-through text-gray-400">$39.99</span>
              </li>
              <li>
                Chamise Cabbage <b className="text-orange-600">$24.00</b>{" "}
                <span className="line-through text-gray-400">$29.99</span>
              </li>
              <li>
                Green Capsicum <b className="text-orange-600">$32.00</b>{" "}
                <span className="line-through text-gray-400">$39.99</span>
              </li>
            </ul>
          </div>
        </div>
      </aside>
    </div>
  );
}

export default AllInOneside;
