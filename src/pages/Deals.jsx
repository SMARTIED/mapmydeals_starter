import dummyDeals from "../data/dummyDeals";

export default function Deals() {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">All Deals</h2>
      <table className="w-full border">
        <thead>
          <tr className="bg-gray-100">
            <th className="p-2 text-left">Product</th>
            <th className="p-2">Price</th>
            <th className="p-2">Store</th>
            <th className="p-2">Distance</th>
          </tr>
        </thead>
        <tbody>
          {dummyDeals.map((deal) => (
            <tr key={deal.id} className="border-t">
              <td className="p-2">{deal.title}</td>
              <td className="p-2 text-primary font-bold">R {deal.price}</td>
              <td className="p-2">{deal.store}</td>
              <td className="p-2">{deal.distance} m</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
