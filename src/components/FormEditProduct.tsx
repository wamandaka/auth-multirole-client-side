import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
const FormEditProduct = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    const getProductById = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8080/products/${id}`
        );
        setName(response.data.name);
        setPrice(response.data.price);
      } catch (error: any) {
        if (error.response) {
          setMessage(error.response.data.msg);
        }
      }
    };
    getProductById();
  }, [id]);

  const updateProduct = async (e: any) => {
    e.preventDefault();
    try {
      await axios.patch(`http://localhost:8080/products/${id}`, {
        name: name,
        price: price,
      });
      navigate("/product");
    } catch (error: any) {
      if (error.response) {
        setMessage(error.response.data.msg);
      }
    }
  };
  return (
    <div>
      <h1 className="text-3xl font-bold text-base-300">Product</h1>
      <h2 className="text-2xl font-bold text-base-300">Edit Product</h2>

      <form
        onSubmit={updateProduct}
        className="mb-0 mt-6 space-y-4 rounded-lg p-4 shadow-lg sm:p-6 lg:p-8 max-w-screen-sm"
      >
        <p className="text-red-500">{message}</p>
        <label className="input input-bordered flex items-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="w-4 h-4 opacity-70"
          >
            <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
            <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
          </svg>
          <input
            name="email"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="grow"
            placeholder="Product Name"
          />
        </label>
        <label className="input input-bordered flex items-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="w-4 h-4 opacity-70"
          >
            <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
          </svg>
          <input
            name="name"
            type="text"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            className="grow"
            placeholder="Price"
          />
        </label>
        <div className="w-full text-center">
          <button type="submit" className="btn btn-wide">
            Update
          </button>
        </div>
      </form>
    </div>
  );
};

export default FormEditProduct;
