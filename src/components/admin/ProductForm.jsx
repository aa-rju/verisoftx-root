import { useState } from "react";

export default function ProductForm({ onAddProduct }) {
  const [product, setProduct] = useState({
    title: "",
    price: "",
    address: "",
    type: "normal",
    photo: "",
    salePrice: "",
    originalPrice: "",
    offerTitle: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddProduct(product);
    setProduct({
      title: "",
      price: "",
      address: "",
      type: "normal",
      photo: "",
      salePrice: "",
      originalPrice: "",
      offerTitle: "",
    });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 bg-white p-6 rounded shadow">
      <input name="title" value={product.title} onChange={handleChange} placeholder="Title" className="input" />
      <input name="photo" value={product.photo} onChange={handleChange} placeholder="Photo URL" className="input" />
      <input name="address" value={product.address} onChange={handleChange} placeholder="Address" className="input" />
      <input name="price" value={product.price} onChange={handleChange} placeholder="Price" type="number" className="input" />

      <select name="type" value={product.type} onChange={handleChange} className="input">
        <option value="normal">Normal</option>
        <option value="sale">Sale</option>
        <option value="offer">Offer</option>
      </select>

      {product.type === "sale" && (
        <>
          <input name="originalPrice" value={product.originalPrice} onChange={handleChange} placeholder="Original Price" type="number" className="input" />
          <input name="salePrice" value={product.salePrice} onChange={handleChange} placeholder="Sale Price" type="number" className="input" />
        </>
      )}

      {product.type === "offer" && (
        <>
          <input name="offerTitle" value={product.offerTitle} onChange={handleChange} placeholder="Offer Title" className="input" />
          <input name="originalPrice" value={product.originalPrice} onChange={handleChange} placeholder="Original Price" type="number" className="input" />
          <input name="salePrice" value={product.salePrice} onChange={handleChange} placeholder="Sale Price" type="number" className="input" />
        </>
      )}

      <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">Add Product</button>
    </form>
  );
}
