export default function Contact() {
  return (
    <div className="max-w-4xl mx-auto p-6 space-y-12">

      {/* Header */}
      <h1 className="text-3xl font-bold text-center mb-6">Contact Us</h1>

      {/* Contact Info */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold">Get in Touch</h2>
          <p className="text-gray-700">
            Have questions or need support? We're here to help! Reach out to us via the form or the contact info below.
          </p>
          <div className="space-y-2">
            <p className="flex items-center"><span className="font-semibold w-20">Email:</span> support@babycare.com</p>
            <p className="flex items-center"><span className="font-semibold w-20">Phone:</span> +880 1234 567890</p>
            <p className="flex items-center"><span className="font-semibold w-20">Address:</span> 123 Baby Lane, Dhaka, Bangladesh</p>
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <form className="space-y-4">
            <div>
              <label className="block font-medium mb-1">Name</label>
              <input
                type="text"
                placeholder="Your Name"
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>

            <div>
              <label className="block font-medium mb-1">Email</label>
              <input
                type="email"
                placeholder="Your Email"
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>

            <div>
              <label className="block font-medium mb-1">Message</label>
              <textarea
                placeholder="Your Message"
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 h-32 resize-none"
              ></textarea>
            </div>

            <button
              type="submit"
              className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>

      {/* Map Section */}
      <section className="mt-8">
        <h2 className="text-2xl font-semibold mb-4 text-center">Our Location</h2>
        <div className="w-full h-64 rounded-lg overflow-hidden shadow-lg">
          <iframe
            title="Baby Care Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.987998942449!2d90.3910!3d23.8103!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c7ddabc6ab7f%3A0x656bb98f7f13f3c4!2sDhaka%2C%20Bangladesh!5e0!3m2!1sen!2sus!4v1690246451586!5m2!1sen!2sus"
            className="w-full h-full"
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </section>

    </div>
  );
}
