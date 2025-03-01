"use client";

import { useState, useEffect } from "react";
import { Sheet, SheetTrigger, SheetContent, SheetHeader, SheetTitle } from '@/components/ui/sheet';
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '@/components/ui/accordion';
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from '@/components/ui/dropdown-menu';
import { ChevronDown, Filter } from 'lucide-react';
import Search from "../global/search";
import { useRouter } from "next/navigation";

const sortOptions = [
  { name: 'Newest', value: 'dateAdded.desc' },
  { name: 'Oldest', value: 'dateAdded.asc' },
  { name: 'High to Low', value: 'discount.desc' },
  { name: 'Low to High', value: 'discount.asc' },
  { name: 'Low to High', value: 'price.asc' },
  { name: 'High to Low', value: 'price.desc' },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function SearchContent({ query }) {
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
  const [types, setTypes] = useState([]);
  const [brands, setBrands] = useState([]);
  const [selectedType, setSelectedType] = useState(null);
  const [selectedBrand, setSelectedBrand] = useState(null);
  const [selectedSort, setSelectedSort] = useState(null);
  const router = useRouter();

  useEffect(() => {
    const fetchTypes = async () => {
      try {
        const response = await fetch("https://user-music-store.vercel.app/api/types/list-types");
        const data = await response.json();
        setTypes(data.types);
      } catch (error) {
        console.error("Failed to fetch types:", error);
      }
    };

    const fetchBrands = async () => {
      try {
        const response = await fetch("https://user-music-store.vercel.app/api/brands/list-brands");
        const data = await response.json();
        setBrands(data.brands);
      } catch (error) {
        console.error("Failed to fetch brands:", error);
      }
    };

    fetchTypes();
    fetchBrands();
  }, []);

  useEffect(() => {
    const url = new URL(window.location);
    url.searchParams.set("query", query || "");
    if (selectedType) {
      url.searchParams.set("selectedType", selectedType);
    } else {
      url.searchParams.delete("selectedType");
    }
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
  }, [selectedType, selectedBrand, query, selectedSort, router]);

  return (
    <div className="bg-white">
      <div className="flex">
        <div className="flex-1">
          <main className="mx-auto max-w-7xl w-full px-4 flex pt-4">
            <aside className="hidden lg:block w-72 pr-6 py-4">
              <h2 className="text-lg font-bold text-gray-900">Filters</h2>
              <form className="mt-2">
                <Accordion type="multiple" collapsible>
                  <AccordionItem value="type">
                    <AccordionTrigger className="font-medium text-gray-900">
                      Types
                    </AccordionTrigger>
                    <AccordionContent>
                      <div className="space-y-2">
                        <div className="flex items-center">
                          <input
                            value={null}
                            id="filter-desktop-type-all"
                            name="type"
                            type="checkbox"
                            checked={selectedType === null}
                            onChange={() => setSelectedType(null)}
                            className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                          />
                          <label htmlFor="filter-desktop-type-all" className="ml-3 text-gray-500">
                            All
                          </label>
                        </div>
                        {types.map((type, idx) => (
                          <div key={type.id || idx} className="flex items-center">
                            <input
                              value={type.id}
                              id={`filter-desktop-type-${idx}`}
                              name="type"
                              type="checkbox"
                              checked={selectedType === type.id}
                              onChange={() => setSelectedType(type.id)}
                              className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                            />
                            <label htmlFor={`filter-desktop-type-${idx}`} className="ml-3 text-gray-500">
                              {type.title}
                            </label>
                          </div>
                        ))}
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="brand">
                    <AccordionTrigger className="font-medium text-gray-900">
                      Brands
                      </AccordionTrigger>
                      <AccordionContent>
                        <div className="space-y-2">
                          <div className="flex items-center">
                            <input
                              value={null}
                              id="filter-desktop-brand-all"
                              name="brand"
                              type="checkbox"
                              checked={selectedBrand === null}
                              onChange={() => setSelectedBrand(null)}
                              className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                            />
                            <label htmlFor="filter-desktop-brand-all" className="ml-3 text-gray-500">
                              All
                            </label>
                          </div>
                          {brands.map((brand, idx) => (
                            <div key={brand.id || idx} className="flex items-center">
                              <input
                                value={brand.id}
                                id={`filter-desktop-brand-${idx}`}
                                name="brand"
                                type="checkbox"
                                checked={selectedBrand === brand.id}
                                onChange={() => setSelectedBrand(brand.id)}
                                className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                              />
                              <label htmlFor={`filter-desktop-brand-${idx}`} className="ml-3 text-gray-500">
                                {brand.title}
                              </label>
                            </div>
                          ))}
                        </div>
                      </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </form>
            </aside>

            <div className="mx-auto max-w-5xl w-full pl-0 lg:pl-4 py-5 space-y-5">
              <div className="flex items-baseline justify-between">
                {/* <h1 className="text-sm tracking-tight text-gray-600">Showing 1 – 40 of 267 results</h1> */}
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
                          className={classNames(
                            option.current ? 'font-medium text-gray-900' : 'text-gray-500',
                            'block px-4 py-2 text-sm'
                          )}
                          onClick={() => setSelectedSort(option.value)}
                        >
                          {option.name}
                        </DropdownMenuItem>
                      ))}
                    </DropdownMenuContent>
                  </DropdownMenu>

                  <Sheet open={mobileFiltersOpen} onOpenChange={setMobileFiltersOpen}>
                    <SheetTrigger asChild>
                      <button
                        onClick={() => setMobileFiltersOpen(true)}
                        className="lg:hidden -m-2 ml-4 p-2 text-gray-400 hover:text-gray-500"
                      >
                        <Filter className="h-5 w-5" aria-hidden="true" />
                        <span className="sr-only">Filters</span>
                      </button>
                    </SheetTrigger>
                    <SheetContent side="left" className="flex flex-col h-full w-full max-w-xs overflow-y-auto bg-white py-4 shadow-xl">
                      <SheetHeader>
                        <SheetTitle>Filters</SheetTitle>
                      </SheetHeader>

                      <form>
                        <Accordion type="multiple" collapsible>
                          <AccordionItem value="type">
                            <AccordionTrigger className="font-medium text-gray-900">
                              Types
                            </AccordionTrigger>
                            <AccordionContent>
                              <div className="space-y-2">
                                <div className="flex items-center">
                                    <input
                                      value={null}
                                      id="filter-mobile-type-all"
                                      name="type"
                                      type="radio"
                                      checked={selectedType === null}
                                      onChange={() => setSelectedType(null)}
                                      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                                    />
                                    <label htmlFor="filter-mobile-type-all" className="ml-3 text-gray-500">
                                      All
                                    </label>
                                </div>
                                {types.map((type, idx) => (
                                  <div key={type.id || idx} className="flex items-center">
                                    <input
                                      value={type.id}
                                      id={`filter-mobile-type-${idx}`}
                                      name="type"
                                      type="radio"
                                      checked={selectedType === type.id}
                                      onChange={() => setSelectedType(type.id)}
                                      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                                    />
                                    <label htmlFor={`filter-mobile-type-${idx}`} className="ml-3 text-gray-500">
                                      {type.title}
                                    </label>
                                  </div>
                                ))}
                              </div>
                            </AccordionContent>
                          </AccordionItem>
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
                                      type="radio"
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
                                      type="radio"
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
                      </form>
                    </SheetContent>
                  </Sheet>
                </div>
              </div>
              <Search query={query} selectedType={selectedType} selectedBrand={selectedBrand} selectedSort={selectedSort}/>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
