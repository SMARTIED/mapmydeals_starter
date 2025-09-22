import dummyDeals from "../data/dummyDeals";

export default function Home() {
  return (
    <div className="flex flex-col items-center text-center">
      {/* Hero Section */}
      <div className="mt-10 space-y-6">
        {/* Title + Tagline */}
        <h1 className="text-4xl font-bold text-primary">MapMyDeals</h1>
        <p className="text-lg text-gray-600">Navigate to Savings — Your deals, mapped</p>

        {/* CTA Button */}
        <a
          href="#deals" // scrolls down to deals list
          className="px-6 py-3 bg-primary text-white rounded-full shadow hover:bg-orange-600 transition"
        >
          Find Deals Near Me
        </a>
      </div>

      {/* Benefits Section */}
      <div className="grid md:grid-cols-3 gap-8 mt-16 max-w-5xl">
        <div className="p-6 border rounded-xl shadow-sm">
          <h3 className="text-xl font-semibold mb-2">📍 Location-Based Deals</h3>
          <p className="text-gray-600">
            Discover the best deals near your current location instantly.
          </p>
        </div>
        <div className="p-6 border rounded-xl shadow-sm">
          <h3 className="text-xl font-semibold mb-2">🚗 Optimized Routes</h3>
          <p className="text-gray-600">
            Save time and fuel with the most efficient shopping routes.
          </p>
        </div>
        <div className="p-6 border rounded-xl shadow-sm">
          <h3 className="text-xl font-semibold mb-2">⚡ Real-Time Prices</h3>
          <p className="text-gray-600">
            Stay updated with live price changes and stock availability.
          </p>
        </div>
      </div>

      {/* Deals Section */}
      <div id="deals" className="mt-20 w-full max-w-3xl text-left">
        <h2 className="text-2xl font-bold mb-4">Nearby Deals</h2>
        <ul className="space-y-3">
          {dummyDeals.map((deal) => (
            <li
              key={deal.id}
              className="p-4 border rounded-lg flex justify-between items-center"
            >
              <div>
                <h3 className="font-semibold">{deal.title}</h3>
                <p className="text-sm text-gray-600">{deal.store}</p>
              </div>
              <div className="text-right">
                <p className="text-primary font-bold">R {deal.price}</p>
                <p className="text-gray-500">{deal.distance} m</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}