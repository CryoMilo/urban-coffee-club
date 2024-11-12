import Image from "next/image";
import menuData from "./menu.json";

export default function Menu() {
  return (
    <section className="bg-secondary">
      <div className="max-w-5xl mx-auto px-6 py-20">
        <h1 className="text-center text-3xl mb-6 font-primary">OUR MENU</h1>
        {/* Coffee Section */}
        <div>
          <h2 className="text-2xl font-semibold mb-4">COFFEE</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-16">
            {menuData.coffee.map((item, index) => (
              <div key={index} className="text-center">
                <div className="relative w-full aspect-square">
                  <Image
                    src={item.image}
                    fill
                    alt={item.name}
                    className="object-cover rounded-lg"
                  />
                </div>
                <h3 className="text-lg font-medium mt-2">{item.name}</h3>
                <p className="text-gray-600">${item.price.toFixed(2)}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Non-Coffee Section */}
        <div className="mt-12">
          <h2 className="text-2xl font-semibold mb-4">NON - COFFEE</h2>
          <table className="w-full text-left">
            <thead>
              <tr>
                <th className="p-2">Name</th>
                <th className="p-2 text-center">Hot</th>
                <th className="p-2 text-center">Ice</th>
              </tr>
            </thead>
            <tbody>
              {menuData.nonCoffee.map((item, index) => (
                <tr key={index}>
                  <td className="p-2">{item.name}</td>
                  <td className="p-2 text-center">
                    {item.hot ? `$${item.hot.toFixed(2)}` : "-"}
                  </td>
                  <td className="p-2 text-center">
                    {item.ice ? `$${item.ice.toFixed(2)}` : "-"}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
