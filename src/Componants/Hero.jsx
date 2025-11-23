import React, { useEffect, useState } from "react";

export default function Hero() {
    const [items, setItems] = useState([]);
    const [category, setCategory] = useState("All");
    const [search, setSearch] = useState("");

    const filtered = items
        .filter(i => category === "All" || i.category === category)
        .filter(i => i.name.toLowerCase().includes(search.toLowerCase()));

    const categories = ["All", ...new Set(items.map(i => i.category))];

    useEffect(() => {
        fetch("/babyitem.json")
            .then(res => res.json())
            .then(data => setItems(data));
    }, []);

    return (
        <div className="min-h-screen bg-gray-100 p-6 container mx-auto">
            {/* Header */}
            <h1 className="text-3xl font-bold text-center mb-6">Baby Shop Items</h1>

            {/* Search + Category Filter */}
            <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-6">
                {/* Search Bar */}
                <input
                    type="text"
                    placeholder="Search baby items..."
                    value={search}
                    onChange={e => setSearch(e.target.value)}
                    className="w-full md:w-1/2 p-3 border rounded-lg bg-white shadow"
                />

                {/* Category Dropdown */}
                <select
                    value={category}
                    onChange={e => setCategory(e.target.value)}
                    className="w-full md:w-1/4 p-3 border rounded-lg bg-white shadow"
                >
                    {categories.map(c => (
                        <option key={c} value={c}>
                            {c}
                        </option>
                    ))}
                </select>
            </div>

            {/* Items Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filtered.length > 0 ? (
                    filtered.map(item => (
                        <div
                            key={item.id}
                            className="bg-white rounded-xl shadow-md p-4 flex flex-col justify-between"
                        >
                            <img
                                src={item.image}
                                alt={item.name}
                                className="w-full h-48 object-cover rounded-lg mb-4"
                            />
                            <h2 className="text-lg font-semibold mb-2">{item.name}</h2>
                            <p className="text-gray-600 text-sm mb-3">{item.description}</p>

                            <div className="flex flex-col sm:flex-row items-center justify-between gap-2">
                                <span className="text-lg font-bold text-pink-600">
                                    ${item.price}
                                </span>
                                <span className="text-yellow-500">⭐ {item.rating}</span>
                                <button className="w-full sm:w-auto px-4 py-2 bg-amber-400 hover:bg-amber-500 rounded-3xl text-white font-semibold transition">
                                    Add Cart
                                </button>
                            </div>
                        </div>
                    ))
                ) : (
                    <p className="text-center text-gray-500 col-span-full">
                        No items found.
                    </p>
                )}
            </div>
        </div>
    );
}
