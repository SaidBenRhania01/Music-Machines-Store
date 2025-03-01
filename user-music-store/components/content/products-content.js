"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Sheet, SheetTrigger, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from "@/components/ui/dropdown-menu";
import { ChevronDown, Filter } from "lucide-react";
import axios from "axios";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function ProductsContent({ category }) {
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
  const [brands, setBrands] = useState([]);
  const [selectedBrand, setSelectedBrand] = useState(null);
  const [selectedSort, setSelectedSort] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const router = useRouter();
  const [products, setProducts] = useState([]);
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        let apiUrl = `https://user-music-store.vercel.app/api/products/list-products?categoryId=${category.id}&page=${currentPage}&limit=40`;

        if (selectedSort) {
          apiUrl += `&sort=${selectedSort}`;
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
  }, [category, brands, selectedBrand, selectedSort, currentPage]);

  const handlePageChange = (newPage) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setCurrentPage(newPage);
    }
  };

  useEffect(() => {
    const fetchBrands = async () => {
      try {
        const response = await fetch("https://user-music-store.vercel.app/api/brands/list-brands");
        const data = await response.json();
        setBrands(data.brands);
      } catch (error) {
        console.error("Failed to fetch brands:", error);
      }
    };

    fetchBrands();
  }, []);

  useEffect(() => {
    const url = new URL(window.location);
    if (selectedBrand) {
      url.searchParams.set("selectedBrand", selectedBrand);
    } else {
      url.searchParams.delete("selectedBrand");
    }
    if (selectedSort) {
      url.searchParams.set("sort", selectedSort);
    } else {
      url.searchParams.delete("sort");
    }
    router.push(`${url.pathname}${url.search}`, { replace: true });
  }, [selectedBrand, selectedSort, router]);

  return (
    <div className="bg-white">
      <div className="flex">
        <div className="flex-1">
          <main className="mx-auto max-w-7xl w-full px-4 flex pt-4">
            <aside className="hidden lg:block w-72 pr-6 py-4">
              <h2 className="text-lg font-bold text-gray-900">Filters</h2>
              <form className="mt-2">
                <h3 className="sr-only">Categories</h3>
                {/* Render Filters dynamically here */}
                {brands.length > 0 && (
                  <Accordion type="single" collapsible key="brands">
                    <AccordionItem value="brand">
                      <AccordionTrigger className="font-medium text-gray-900">
                        Brands
                      </AccordionTrigger>
                      <AccordionContent>
                        <div className="space-y-2">
                          <div className="flex items-center">
                              <input
                                value={null}
                                id="filter-mobile-brand-all"
                                name="brand"
                                type="checkbox"
                                checked={selectedBrand === null}
                                onChange={() => setSelectedBrand(null)}
                                className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                              />
                              <label htmlFor="filter-mobile-brand-all" className="ml-3 text-gray-500">
                                All
                              </label>
                          </div>
                          {brands.map((brand, idx) => (
                            <div key={brand.id || idx} className="flex items-center">
                              <input
                                value={brand.id}
                                id={`filter-mobile-brand-${idx}`}
                                name="brand"
                                type="checkbox"
                                checked={selectedBrand === brand.id}
                                onChange={() => setSelectedBrand(brand.id)}
                                className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                              />
                              <label htmlFor={`filter-mobile-brand-${idx}`} className="ml-3 text-gray-500">
                                {brand.title}
                              </label>
                            </div>
                          ))}
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                )}
              </form>
            </aside>

            <div className="mx-auto max-w-5xl w-full pl-0 lg:pl-4 py-5 space-y-5">
              <div className="flex items-baseline justify-between">
                {/* <h1 className="text-sm tracking-tight text-gray-600">Showing 1 – 40 of {products.length} results</h1> */}
                <h1 className="text-sm tracking-tight text-gray-600"></h1>
                <div className="flex items-center">
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <button className="group inline-flex justify-center text-sm font-medium text-gray-700 hover:text-gray-900">
                        Sort
                        <ChevronDown className="h-5 w-5 ml-1 flex-shrink-0 text-gray-400 group-hover:text-gray-500" aria-hidden="true" />
                      </button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="mt-2 w-40 origin-top-right bg-white shadow-2xl ring-1 ring-black ring-opacity-5">
                      {sortOptions.map((option) => (
                        <DropdownMenuItem
                          as="button"
                          key={option.name}
                          className={classNames(option.current ? 'font-medium text-gray-900' : 'text-gray-500', 'block px-4 py-2 text-sm')}
                          onClick={() => setSelectedSort(option.value)}
                        >
                          {option.name}
                        </DropdownMenuItem>
                      ))}
                    </DropdownMenuContent>
                  </DropdownMenu>

                  <Sheet open={mobileFiltersOpen} onOpenChange={setMobileFiltersOpen}>
                    <SheetTrigger asChild>
                      <button onClick={() => setMobileFiltersOpen(true)} className="lg:hidden -m-2 ml-4 p-2 text-gray-400 hover:text-gray-500">
                        <Filter className="h-5 w-5" aria-hidden="true" />
                        <span className="sr-only">Filters</span>
                      </button>
                    </SheetTrigger>
                    <SheetContent side="left" className="flex flex-col h-full w-full max-w-xs overflow-y-auto bg-white py-4 shadow-xl">
                      <SheetHeader>
                        <SheetTitle>Filters</SheetTitle>
                      </SheetHeader>

                      <form className="">
                        {brands.length > 0 && (
                          <Accordion type="single" collapsible key="brands-mobile">
                            <AccordionItem value="brand">
                              <AccordionTrigger className="font-medium text-gray-900">
                                Brands
                              </AccordionTrigger>
                              <AccordionContent>
                                <div className="space-y-2">
                                  <div className="flex items-center">
                                      <input
                                        value={null}
                                        id="filter-mobile-brand-all"
                                        name="brand"
                                        type="checkbox"
                                        checked={selectedBrand === null}
                                        onChange={() => setSelectedBrand(null)}
                                        className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                                      />
                                      <label htmlFor="filter-mobile-brand-all" className="ml-3 text-gray-500">
                                        All
                                      </label>
                                  </div>
                                  {brands.map((brand, idx) => (
                                    <div key={brand.id || idx} className="flex items-center">
                                      <input
                                        value={brand.id}
                                        id={`filter-mobile-brand-${idx}`}
                                        name="brand"
                                        type="checkbox"
                                        checked={selectedBrand === brand.id}
                                        onChange={() => setSelectedBrand(brand.id)}
                                        className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                                      />
                                      <label htmlFor={`filter-mobile-brand-${idx}`} className="ml-3 text-gray-500">
                                        {brand.title}
                                      </label>
                                    </div>
                                  ))}
                                </div>
                              </AccordionContent>
                            </AccordionItem>
                          </Accordion>
                        )}
                      </form>
                    </SheetContent>
                  </Sheet>
                </div>
              </div>

              <Products products={products} currentPage={currentPage} totalPages={totalPages} handlePageChange={handlePageChange} />
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}

function Products({ products, currentPage, totalPages, handlePageChange }) {
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
                  <div className="w-full h-full bg-gray-200 flex items-center justify-center text-gray-500">No Image</div>
                )}
              </div>
              <div className="space-y-2">
                <div className="text-xs text-muted-foreground">{product.category.title}</div>
                <Link href={`/product-details/${product.title}`} className="text-sm line-clamp-1 font-semibold hover:underline">{product.title}</Link>
                <div className="flex items-baseline gap-2">
                  <span className="font-bold">{discountedPrice} Dhs</span>
                  {product.discount > 0 && (
                    <span className="text-sm text-muted-foreground line-through text-red-600">{product.price.toFixed(2)} Dhs</span>
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

const sortOptions = [
  { name: 'Price: Low to High', value: 'price.asc', current: false },
  { name: 'Price: High to Low', value: 'price.desc', current: false },
  { name: 'Newest', value: 'dateAdded.desc', current: true },
  { name: 'Oldest', value: 'dateAdded.asc', current: false },
  { name: 'Discount: High to Low', value: 'discount.desc', current: false },
  { name: 'Discount: Low to High', value: 'discount.asc', current: false },
];