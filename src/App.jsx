export default function ChilliLimeWebsite() {
  const gallery = [
    {
      image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4",
      title: "Luxury Dining",
    },
    {
      image: "https://images.unsplash.com/photo-1552566626-52f8b828add9",
      title: "Fine Interior",
    },
    {
      image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0",
      title: "Delicious Food",
    },
    {
      image: "https://images.unsplash.com/photo-1514933651103-005eec06c04b",
      title: "Romantic Setup",
    },
  ];

  const menuItems = [
    {
      name: "Paneer Tikka",
      price: "₹299",
      desc: "Smoky and spicy grilled paneer served with mint chutney.",
    },
    {
      name: "Chilli Garlic Noodles",
      price: "₹349",
      desc: "Hot and flavorful noodles tossed with fresh vegetables.",
    },
    {
      name: "Veg Sizzler",
      price: "₹499",
      desc: "Loaded sizzling platter with sauces and grilled veggies.",
    },
    {
      name: "Special Mocktail",
      price: "₹199",
      desc: "Refreshing signature drink with lime and mint flavors.",
    },
  ];

  return (
    <div className="bg-white text-gray-900 font-sans">
      {/* HERO SECTION */}
      <section
        className="relative h-screen bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1517248135467-4c7edcad34c4')",
        }}
      >
        <div className="absolute inset-0 bg-black/60"></div>

        <header className="relative z-10 flex items-center justify-between px-8 py-5 text-white">
          <h1 className="text-4xl font-bold tracking-wide">
            <span className="text-red-600">Chilli</span>{" "}
            <span className="text-lime-400">Lime</span>
          </h1>

          <nav className="hidden md:flex gap-8 text-lg">
            <a href="#about" className="hover:text-lime-300 transition">
              About
            </a>
            <a href="#menu" className="hover:text-lime-300 transition">
              Menu
            </a>
            <a href="#gallery" className="hover:text-lime-300 transition">
              Gallery
            </a>
            <a href="#contact" className="hover:text-lime-300 transition">
              Contact
            </a>
          </nav>
        </header>

        <div className="relative z-10 flex flex-col items-center justify-center h-[80%] text-center px-6">
          <h2 className="text-5xl md:text-7xl font-extrabold text-white leading-tight max-w-5xl">
            Fine Dine Experience in Patna
          </h2>

          <p className="mt-6 text-lg md:text-2xl text-gray-200 max-w-3xl">
            Enjoy delicious food, luxury ambience, live music, outdoor seating,
            and unforgettable moments at Chilli Lime Restaurant.
          </p>

          <div className="mt-8 flex flex-wrap gap-4 justify-center">
            <button className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-full text-lg font-semibold transition">
              Reserve Table
            </button>

            <button className="border border-white text-white hover:bg-white hover:text-black px-8 py-4 rounded-full text-lg font-semibold transition">
              Explore Menu
            </button>
          </div>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section id="about" className="py-24 px-6 md:px-16 bg-gray-50">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <img
              src="https://images.unsplash.com/photo-1552566626-52f8b828add9"
              alt="Restaurant"
              className="rounded-3xl shadow-2xl w-full h-[500px] object-cover"
            />
          </div>

          <div>
            <p className="text-red-600 uppercase tracking-[4px] font-semibold mb-4">
              Welcome to Chilli Lime
            </p>

            <h3 className="text-5xl font-bold leading-tight mb-6">
              One of the Best Ambience Restaurants in Patna
            </h3>

            <p className="text-gray-600 text-lg leading-8 mb-6">
              Step into Chilli Lime and enjoy a premium fine dining experience
              with delicious food, elegant interior design, outdoor seating,
              live music, and beautiful decor for couples, families, and
              celebrations.
            </p>

            <div className="grid grid-cols-2 gap-5 mt-8">
              <div className="bg-white p-6 rounded-2xl shadow-md">
                <h4 className="text-3xl font-bold text-red-600">4.8★</h4>
                <p className="mt-2 text-gray-600">Google Rating</p>
              </div>

              <div className="bg-white p-6 rounded-2xl shadow-md">
                <h4 className="text-3xl font-bold text-lime-600">1200+</h4>
                <p className="mt-2 text-gray-600">Happy Customers</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MENU SECTION */}
      <section id="menu" className="py-24 px-6 md:px-16 bg-white">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-red-600 uppercase tracking-[4px] font-semibold">
            Our Special Menu
          </p>

          <h3 className="text-5xl font-bold mt-4 mb-14">
            Popular Dishes
          </h3>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {menuItems.map((item, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-3xl p-8 shadow-lg hover:-translate-y-2 transition duration-300"
              >
                <div className="text-5xl mb-5">🍽️</div>

                <h4 className="text-2xl font-bold">{item.name}</h4>

                <p className="text-red-600 font-bold text-xl mt-3">
                  {item.price}
                </p>

                <p className="text-gray-600 mt-4 leading-7">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section id="gallery" className="py-24 px-6 md:px-16 bg-gray-100">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-red-600 uppercase tracking-[4px] font-semibold">
              Restaurant Gallery
            </p>

            <h3 className="text-5xl font-bold mt-4">
              Beautiful Moments & Interior
            </h3>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {gallery.map((item, index) => (
              <div
                key={index}
                className="overflow-hidden rounded-3xl shadow-xl group relative"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-[350px] w-full object-cover group-hover:scale-110 transition duration-500"
                />

                <div className="absolute inset-0 bg-black/40 flex items-end p-6">
                  <h4 className="text-white text-2xl font-bold">
                    {item.title}
                  </h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURES SECTION */}
      <section className="py-24 px-6 md:px-16 bg-black text-white">
        <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-8 text-center">
          <div className="bg-white/10 p-8 rounded-3xl backdrop-blur-md">
            <div className="text-5xl mb-4">🎵</div>
            <h4 className="text-2xl font-bold">Live Music</h4>
          </div>

          <div className="bg-white/10 p-8 rounded-3xl backdrop-blur-md">
            <div className="text-5xl mb-4">🌿</div>
            <h4 className="text-2xl font-bold">Outdoor Seating</h4>
          </div>

          <div className="bg-white/10 p-8 rounded-3xl backdrop-blur-md">
            <div className="text-5xl mb-4">🥗</div>
            <h4 className="text-2xl font-bold">Vegan Options</h4>
          </div>

          <div className="bg-white/10 p-8 rounded-3xl backdrop-blur-md">
            <div className="text-5xl mb-4">❤️</div>
            <h4 className="text-2xl font-bold">Couple Setup</h4>
          </div>
        </div>
      </section>

      {/* RESERVATION CTA */}
      <section className="py-24 px-6 md:px-16 bg-gradient-to-r from-red-600 to-red-800 text-white text-center">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-5xl font-bold leading-tight">
            Reserve Your Table Today
          </h3>

          <p className="mt-6 text-xl text-red-100 leading-8">
            Celebrate birthdays, anniversaries, family dinners, and special
            moments with premium ambience and delicious food.
          </p>

          <button className="mt-10 bg-white text-red-700 px-10 py-4 rounded-full text-xl font-bold hover:scale-105 transition">
            Book Now
          </button>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section id="contact" className="py-24 px-6 md:px-16 bg-white">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-14 items-center">
          <div>
            <p className="text-red-600 uppercase tracking-[4px] font-semibold mb-4">
              Contact Us
            </p>

            <h3 className="text-5xl font-bold mb-8">
              Visit Chilli Lime Restaurant
            </h3>

            <div className="space-y-6 text-lg text-gray-700 leading-8">
              <p>
                📍 A1 Block, Chandan Hero, A3, P C Colony Rd, PC Colony,
                Kankarbagh, Patna, Bihar 800020
              </p>

              <p>📞 091222 41515</p>

              <p>🕛 Open Daily: 12 PM – 11 PM</p>

              <p>💰 Price Range: ₹200 – ₹1,000 per person</p>
            </div>

            <div className="mt-10 flex gap-4 flex-wrap">
              <button className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-full font-semibold transition">
                Call Now
              </button>

              <button className="border border-black hover:bg-black hover:text-white px-8 py-4 rounded-full font-semibold transition">
                Get Directions
              </button>
            </div>
          </div>

          <div className="rounded-3xl overflow-hidden shadow-2xl h-[450px]">
            <iframe
              title="map"
              src="https://maps.google.com/maps?q=Patna&t=&z=13&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-black text-white py-10 px-6 text-center">
        <h3 className="text-4xl font-bold mb-4">
          <span className="text-red-600">Chilli</span>{" "}
          <span className="text-lime-400">Lime</span>
        </h3>

        <p className="text-gray-400 max-w-2xl mx-auto leading-7">
          Fine dine restaurant in Kankarbagh, Patna offering luxury ambience,
          delicious food, romantic setup, family dining, and unforgettable
          experiences.
        </p>

        <p className="mt-6 text-gray-500">
          © 2026 Chilli Lime Restaurant. All Rights Reserved.
        </p>
      </footer>
    </div>
  );
}
