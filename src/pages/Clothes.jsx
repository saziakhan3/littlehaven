import { useEffect, useState } from "react";

export default function Clothes() {
  const [items, setItems] = useState([]);
  const [search, setSearch] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  // Fetch baby clothes JSON
  useEffect(() => {
    fetch("/BabyClothes.json")
      .then(res => res.json())
      .then(data => setItems(data));
  }, []);

  // Update suggestions on typing
  useEffect(() => {
    if (search.trim() === "") {
      setSuggestions([]);
    } else {
      const matches = items
        .filter(i => i.name.toLowerCase().includes(search.toLowerCase()))
        .slice(0, 5);
      setSuggestions(matches);
    }
  }, [search, items]);

  // Filtered items for showing cards
  const filtered = items.filter(i =>
    i.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="p-4 max-w-7xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-center">Baby Clothes</h1>

      {/* Search Input */}
      <div className="relative mb-6">
        <input
          type="text"
          placeholder="Search baby clothes..."
          className="w-full p-3 border rounded-lg shadow-md"
          value={search}
          onChange={e => setSearch(e.target.value)}
        />
        {/* Suggestions */}
        {suggestions.length > 0 && (
          <ul className="absolute w-full bg-white border rounded-b-lg shadow-lg mt-1 z-50">
            {suggestions.map(item => (
              <li
                key={item.id}
                className="p-2 cursor-pointer hover:bg-gray-100"
                onClick={() => setSearch(item.name)}
              >
                {item.name}
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* Items Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {filtered.length > 0 ? (
          filtered.map(item => (
            <div
              key={item.id}
              className="bg-white p-4 rounded-xl shadow-xl hover:scale-105 transition transform flex flex-col justify-between"
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-40 object-cover rounded-lg mb-3"
              />
              <h2 className="font-bold text-lg mb-2">{item.name}</h2>
              <p className="text-blue-600 font-semibold mb-3">৳ {item.price}</p>

              {/* Add Cart Button */}
              <button className="w-full sm:w-auto px-4 py-2 bg-amber-400 hover:bg-amber-500 rounded-3xl text-white font-semibold transition self-start">
                Add Cart
              </button>
            </div>
          ))
        ) : (
          <p className="col-span-full text-center text-gray-500 mt-6">
            No items found.
          </p>
        )}
      </div>
    </div>
  );
}
