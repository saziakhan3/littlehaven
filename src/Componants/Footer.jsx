import React from "react";

export default function Footer() {
  return (
    <footer className="bg-pink-50 text-gray-700 p-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">

        {/* Logo & Description */}
        <div className="space-y-3">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKkZL1twmXhwfPeA88ShKQL1YTswz1IGd4kQ&s"
            alt="Baby Shop Logo"
            className="w-32"
          />
          <p className="text-gray-600">
            Tiny Tots Baby Shop <br />
            Bringing smiles to your little ones with safe & fun products.
          </p>
        </div>

        {/* Products */}
        <div>
          <h6 className="font-bold mb-3">Products</h6>
          <ul className="space-y-2">
            <li><a className="hover:text-pink-500 transition cursor-pointer">Clothes</a></li>
            <li><a className="hover:text-pink-500 transition cursor-pointer">Toys</a></li>
            <li><a className="hover:text-pink-500 transition cursor-pointer">Health Care</a></li>
            <li><a className="hover:text-pink-500 transition cursor-pointer">Feeding</a></li>
            <li><a className="hover:text-pink-500 transition cursor-pointer">Accessories</a></li>
          </ul>
        </div>

        {/* Company */}
        <div>
          <h6 className="font-bold mb-3">Company</h6>
          <ul className="space-y-2">
            <li><a className="hover:text-pink-500 transition cursor-pointer">About Us</a></li>
            <li><a className="hover:text-pink-500 transition cursor-pointer">Contact</a></li>
            <li><a className="hover:text-pink-500 transition cursor-pointer">Careers</a></li>
            <li><a className="hover:text-pink-500 transition cursor-pointer">Blog</a></li>
          </ul>
        </div>

        {/* Social & Contact */}
        <div className="space-y-4">
          <h6 className="font-bold mb-3">Connect With Us</h6>
          <div className="flex space-x-4">
            <a href="#" className="text-pink-500 hover:text-pink-700 transition">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M22,12A10,10,0,1,1,12,2,10,10,0,0,1,22,12Zm-5-2h-3V7h3ZM12,7a1,1,0,1,0,1,1A1,1,0,0,0,12,7Z"/>
              </svg>
            </a>
            <a href="#" className="text-pink-500 hover:text-pink-700 transition">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M22,5.5a9.77,9.77,0,0,1-2.83.78,4.92,4.92,0,0,0,2.16-2.71,9.85,9.85,0,0,1-3.13,1.2,4.92,4.92,0,0,0-8.38,4.48A13.95,13.95,0,0,1,1.67,4.15,4.91,4.91,0,0,0,3.2,10.86,4.92,4.92,0,0,1,2,10v.06a4.92,4.92,0,0,0,3.95,4.83,4.93,4.93,0,0,1-2.21.08,4.92,4.92,0,0,0,4.6,3.42A9.86,9.86,0,0,1,2,19.54,13.92,13.92,0,0,0,9.29,21c9.14,0,14.13-7.72,14.13-14.44,0-.22,0-.44-.02-.65A10.1,10.1,0,0,0,22,5.5Z"/>
              </svg>
            </a>
            <a href="#" className="text-pink-500 hover:text-pink-700 transition">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.04c-5.52 0-10 4.48-10 10 0 4.41 2.86 8.16 6.84 9.49.5.09.68-.22.68-.48 0-.24-.01-.87-.01-1.7-2.78.61-3.37-1.34-3.37-1.34-.45-1.16-1.11-1.47-1.11-1.47-.91-.63.07-.62.07-.62 1.01.07 1.54 1.04 1.54 1.04.89 1.53 2.34 1.09 2.91.83.09-.65.35-1.09.63-1.34-2.22-.26-4.56-1.11-4.56-4.95 0-1.09.39-1.99 1.03-2.69-.1-.26-.45-1.3.1-2.71 0 0 .84-.27 2.75 1.03a9.6 9.6 0 0 1 5 0c1.91-1.3 2.75-1.03 2.75-1.03.55 1.41.2 2.45.1 2.71.64.7 1.03 1.6 1.03 2.69 0 3.85-2.34 4.69-4.57 4.94.36.31.68.92.68 1.86 0 1.34-.01 2.42-.01 2.75 0 .27.18.58.69.48A10.01 10.01 0 0 0 22 12.04c0-5.52-4.48-10-10-10z"/>
              </svg>
            </a>
          </div>
          <p className="text-gray-500 text-sm">© 2025 Tiny Tots Baby Shop. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
