import { useState } from "react";
import Topbar from "../../components/admin/Topbar";
import ProductForm from "../../components/admin/ProductForm";

export default function AdminProducts() {
  const [products, setProducts] = useState([]);

  const handleAddProduct = (product) => {
    setProducts((prev) => [...prev, product]);
  };

  const renderTable = (type) => {
    const filtered = products.filter((p) => p.type === type);
    if (filtered.length === 0) return null;

    return (
      <div className="bg-white p-4 rounded shadow mb-8 overflow-x-auto">
        <h2 className="text-lg font-bold mb-2 capitalize">{type} Products</h2>
        <table className="min-w-full text-left text-sm">
          <thead>
            <tr className="border-b bg-gray-100">
              <th>Title</th>
              <th>Photo</th>
              <th>Price</th>
              <th>Address</th>
              {type !== "normal" && <th>Original Price</th>}
              {type !== "normal" && <th>Sale Price</th>}
              {type === "offer" && <th>Offer Title</th>}
            </tr>
          </thead>
          <tbody>
            {filtered.map((p, i) => (
              <tr key={i} className="border-t">
                <td>{p.title}</td>
                <td><img src={p.photo} alt={p.title} className="h-10 w-10 object-cover" /></td>
                <td>{p.price}</td>
                <td>{p.address}</td>
                {type !== "normal" && <td>{p.originalPrice}</td>}
                {type !== "normal" && <td>{p.salePrice}</td>}
                {type === "offer" && <td>{p.offerTitle}</td>}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  };

  return (
    <div className="ml-64 p-6 bg-gray-100 min-h-screen">
      <Topbar />
      <ProductForm onAddProduct={handleAddProduct} />
      {renderTable("normal")}
      {renderTable("sale")}
      {renderTable("offer")}
    </div>
  );
}
