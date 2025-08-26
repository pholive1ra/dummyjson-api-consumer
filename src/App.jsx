import { useEffect, useState } from "react";
import Button from "./Button";
import axios from "axios";

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("https://dummyjson.com/products")
      .then((res) => setProducts(res.data.products))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold text-center mb-8">API dummyjson</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((p) => (
          <div
            key={p.id}
            className="bg-white rounded-lg shadow hover:shadow-lg transition p-4 gap-4 flex flex-col items-center"
          >
            <img
              src={p.thumbnail}
              alt={p.title}
              className="w-24 h-24 object-cover rounded mb-4"
            />
            <h2 className="text-center font-semibold text-lg mb-2">
              {p.title}
            </h2>
            <p className="text-zinc-400 font-bold text-lg">
              Disponível: {p.stock}
            </p>
            <p className="text-green-600 font-bold text-lg">${p.price}</p>
            <Button />
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
