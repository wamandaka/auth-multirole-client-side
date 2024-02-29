import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = async () => {
    const response = await axios.get("http://localhost:8080/products");
    setProducts(response.data);
  };

  const deleteProduct = async (productId: any) => {
    await axios.delete(`http://localhost:8080/products/${productId}`);
    getProducts();
  };
  return (
    <div>
      <h1 className="text-3xl font-bold text-base-300">Product List</h1>
      <Link
        to={"/product/add"}
        className="inline-block rounded bg-indigo-600 px-4 py-2 text-xs font-medium text-white hover:bg-indigo-700 my-4"
      >
        Add new Product
      </Link>
      <div className="overflow-x-auto max-w-screen-lg">
        <table className="table bg-slate-800 rounded-md">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Product Name</th>
              <th>Price</th>
              <th>Created By</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {products?.map((product: any, index) => (
              <tr key={product.uuid}>
                <th>{index + 1}</th>
                <td>{product.name}</td>
                <td>{product.price}</td>
                <td>{product.user.name}</td>
                <td>
                  <Link
                    to={`/product/edit/${product.uuid}`}
                    className="btn btn-info"
                  >
                    Edit
                  </Link>
                  <button
                    onClick={() => deleteProduct(product.uuid)}
                    className="btn btn-error"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ProductList;
