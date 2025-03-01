"use client";

import { useEffect, useState } from "react";
import { Products } from "./products";
import axios from "axios";

export const NewsArticles = () => {
  const [products, setProducts] = useState([]);
  const [loading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://user-music-store.vercel.app/api/products/list-products?sort=dateAdded.desc"
        );

        if (response.data && response.data.products) {
          setProducts(response.data.products);
          console.log(response.data.products);
        } else {
          throw new Error("Invalid response format");
        }
      } catch (err) {
        console.error("Error fetching data:", err);
        setError(err.message || "Failed to load data.");
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  const title = "News Articles";

  if (loading) return <p className="text-center">Loading...</p>;
  if (error) return <p className="text-center text-red-500">{error}</p>;

  return <Products products={products} title={title} />;
};