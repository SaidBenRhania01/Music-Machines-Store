import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import axios from "axios";

export default function Search({ query, selectedType, selectedBrand, selectedSort }) {
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    const fetchData = async () => {
      try {
        let apiUrl = `https://user-music-store.vercel.app/api/products/list-products?search=${query}&page=${currentPage}&limit=40`;

        if (selectedSort) {
          apiUrl += `&sort=${selectedSort}`;
        }
        if (selectedType) {
          apiUrl += `&typeId=${selectedType}`;
        }
        if (selectedBrand) {
          apiUrl += `&brandId=${selectedBrand}`;
        }

        const response = await axios.get(apiUrl);
        setProducts(response.data.products);
        setTotalPages(response.data.totalPages || 1);

        console.log(response.data.products);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [query, selectedType, selectedBrand, selectedSort, currentPage]);

  const handlePageChange = (newPage) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setCurrentPage(newPage);
    }
  };

  if (products.length === 0) return <p className="text-center pt-12">No products found.</p>;
  return (
    <div className="w-full mx-auto">
      <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
        {products.map((product) => {
          const discountedPrice = (product.price * (1 - product.discount / 100)).toFixed(2);
          return (
            <div key={product.id} className="group relative flex flex-col border px-5 py-3">
              {product.discount > 0 && (
                <div className="absolute z-20 top-2 right-2 bg-[#F5C872] text-black text-xs font-semibold px-2 py-1 rounded">
                  {product.discount}% OFF
                </div>
              )}
              <div className="aspect-square relative mb-4 overflow-hidden">
                {product.images ? (
                  <Image
                    src={product.images[0]}
                    alt={product.title}
                    className="w-full h-full object-contain duration-500 hover:scale-125"
                    width={250}
                    height={250}
                  />
                ) : (
                  <div className="w-full h-full bg-gray-200 flex items-center justify-center text-gray-500">
                    No Image
                  </div>
                )}
              </div>
              <div className="space-y-2">
                <div className="text-xs text-muted-foreground">
                  {product.category.title}
                </div>
                <Link href={`/product-details/${product.title}`} className="text-sm line-clamp-1 font-semibold hover:underline">
                  {product.title}
                </Link>
                <div className="flex items-baseline gap-2">
                  <span className="font-bold">{discountedPrice} Dhs</span>
                  {product.discount > 0 && (
                    <span className="text-sm text-muted-foreground line-through text-red-600">
                      {product.price.toFixed(2)} Dhs
                    </span>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="flex justify-center items-center mt-12 gap-4">
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className="px-4 py-2 bg-black text-white rounded-full hover:bg-black/80"
        >
          Previous
        </button>
        <span>
          Page {currentPage} of {totalPages}
        </span>
        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="px-4 py-2 bg-black text-white rounded-full hover:bg-black/80"
        >
          Next
        </button>
      </div>
    </div>
  );
}
