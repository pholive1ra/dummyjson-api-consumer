import { useState } from "react";
import Button from "./Button";
import axios from "axios";

function App() {
  const [search, setSearch] = useState("");
  const [products, setProducts] = useState([]);

  const handleSearch = () => {
    axios
      .get(`https://dummyjson.com/products/search?q=${search}`)
      .then((res) => {
        setProducts(res.data.products);
      }) 
      .catch((err) => {
        console.error("Erro ao buscar país:", err);
      });
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold text-center mb-8">
        Produtos API Dummyjson
      </h1>
      <div className="text-center">
        <input
          placeholder="Digite o nome do produto"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-[200px] rounded-md  m-2 border p-1"
        />

        <button
          className="mr-6"
          onClick={() => {
            setSearch("");
            handleSearch(); // refaz a busca com vazio
          }}
        >
          x
        </button>

        <button
          className="w-28 rounded-md bg-black text-white"
          onClick={handleSearch}
        >
          Buscar
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map(
          (
            product //Renderizando a lista de produtos da API
          ) => (
            <div
              key={product.id}
              className="bg-white rounded-lg shadow hover:shadow-lg transition p-4 gap-4 flex flex-col items-center mt-6"
            >
              <img
                src={product.thumbnail}
                alt={product.title}
                className="w-24 h-24 object-cover rounded mb-4"
              />
              <h2 className="text-center font-semibold text-lg mb-2">
                {product.title}
              </h2>
              <p className="text-zinc-400 font-bold text-lg">
                Disponível: {product.stock}
              </p>
              <p className="text-green-600 font-bold text-lg">
                ${product.price}
              </p>
              <Button />
            </div>
          )
        )}
      </div>
    </div>
  );
}

export default App;
