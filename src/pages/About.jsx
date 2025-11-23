export default function About() {
  return (
    <div className="max-w-7xl mx-auto p-6 space-y-12">

      {/* Hero Section */}
      <section className="flex flex-col md:flex-row items-center gap-8">
        <img
          src="https://t4.ftcdn.net/jpg/06/13/33/21/360_F_613332177_rdl36d2CnlqC1tqGQE3CizEJdu9G2Ltj.jpg"
          alt="Baby Care"
          className="w-full md:w-1/2 rounded-lg shadow-lg"
        />
        <div className="md:w-1/2">
          <h1 className="text-4xl font-bold mb-4">About Our Baby Care Store</h1>
          <p className="text-gray-700 mb-4">
            We provide the best products for your little ones. Our mission is to ensure
            babies receive safe, high-quality items for their daily care and health.
          </p>
          <p className="text-gray-700">
            From clothing to health essentials, we carefully select each product for comfort,
            safety, and style. Trust us to make parenting easier and more enjoyable.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="bg-blue-50 p-6 rounded-lg shadow-md">
        <h2 className="text-3xl font-bold mb-3">Our Mission</h2>
        <p className="text-gray-700">
          To provide safe, high-quality, and affordable baby products that support healthy
          development and happy parenting.
        </p>
      </section>

      {/* Vision Section */}
      <section className="bg-green-50 p-6 rounded-lg shadow-md">
        <h2 className="text-3xl font-bold mb-3">Our Vision</h2>
        <p className="text-gray-700">
          To be the most trusted brand for baby care products, known for quality, reliability,
          and innovation in the baby care industry.
        </p>
      </section>

      {/* Team Section */}
      <section className="space-y-6">
        <h2 className="text-3xl font-bold text-center mb-6">Meet Our Team</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          <div className="bg-white rounded-lg shadow-lg p-4 text-center">
            <img
              src="https://ichef.bbci.co.uk/images/ic/1200x675/p018ghv6.jpg"
              alt="Team Member"
              className="w-24 h-24 rounded-full mx-auto mb-3"
            />
            <h3 className="font-bold">Alice Johnson</h3>
            <p className="text-gray-500 text-sm">Founder & CEO</p>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-4 text-center">
            <img
              src="https://m.media-amazon.com/images/M/MV5BNjk1ZTc5MGMtYWUzOS00NTFkLWEyNWQtODE2MzhhYjJhZmIzXkEyXkFqcGc@._V1_.jpg"
              alt="Team Member"
              className="w-24 h-24 rounded-full mx-auto mb-3"
            />
            <h3 className="font-bold">Michael Smith</h3>
            <p className="text-gray-500 text-sm">Head of Operations</p>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-4 text-center">
            <img
              src="https://m.media-amazon.com/images/M/MV5BYmQwMzMxYzQtZDAyNC00YmIyLThkNjktNTc2NWNmZTQ2MzM4XkEyXkFqcGc@._V1_.jpg"
              alt="Team Member"
              className="w-24 h-24 rounded-full mx-auto mb-3"
            />
            <h3 className="font-bold">Sarah Lee</h3>
            <p className="text-gray-500 text-sm">Product Manager</p>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-4 text-center">
            <img
              src="https://vmagazine.com/wp-content/uploads/2025/05/250504_V_MAN_DIGITAL_DAVID_3.jpg-250504_V_MAN_DIGITAL_DAVID_2.jpg-250504_V_MAN_DIGITAL_DAVID_1-1-819x1024.jpeg"
              alt="Team Member"
              className="w-24 h-24 rounded-full mx-auto mb-3"
            />
            <h3 className="font-bold">David Kim</h3>
            <p className="text-gray-500 text-sm">Marketing Lead</p>
          </div>
        </div>
      </section>

    </div>
  );
}
