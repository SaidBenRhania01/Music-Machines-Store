"use client";

import Image from "next/image";
import Link from "next/link";
import { Plus, Minus, Heart, X } from "lucide-react";
import { useState } from "react";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { removeFromCart, incrementItem, decrementItem } from "@/lib/features/cart/cartSlice";
import { Dialog, DialogTrigger, DialogContent, DialogTitle, DialogDescription, DialogFooter } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

export default function Cart() {
  const dispatch = useAppDispatch();
  const cartItems = useAppSelector((state) => state.cart.itemList);
  const totalAmount = cartItems.reduce((total, item) => total + item.totalPrice, 0).toFixed(2);
  const [itemToRemove, setItemToRemove] = useState(null);

  const handleRemove = () => {
    if (itemToRemove) {
      dispatch(removeFromCart(itemToRemove));
      setItemToRemove(null);
    }
  };

  const handleIncrement = (item) => {
    dispatch(incrementItem(item));
  };

  const handleDecrement = (item) => {
    if (item.quantity > 1) {
      dispatch(decrementItem(item));
    } else {
      setItemToRemove(item);
    }
  };

  return (
    <div className="min-h-screen">
      <div className="bg-gray-50 border-b">
        <nav aria-label="breadcrumb" className="py-6 px-4 mx-auto w-full max-w-7xl">
          <ol className="flex items-center space-x-2 text-sm">
            <li>
              <Link href="/" className="text-gray-500 hover:text-black font-medium">
                Home
              </Link>
            </li>
            <li>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 text-gray-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
              </svg>
            </li>
            <li aria-current="page" className="text-black">
              Cart
            </li>
          </ol>
        </nav>
      </div>
      <section className="bg-white py-8 md:py-10">
        <div className="mx-auto max-w-7xl px-4">
          <h2 className="text-xl md:text-2xl lg:text-3xl font-bold">Shopping Cart</h2>
          <div className="mt-6 sm:mt-8 md:gap-6 lg:flex lg:items-start xl:gap-8">
            <div className="mx-auto w-full flex-none lg:max-w-2xl xl:max-w-3xl">
              <div className="space-y-4">
                {cartItems.length === 0 ? (
                  <p className="text-gray-500">Your cart is empty.</p>
                ) : (
                  cartItems.map((item) => (
                    <div key={item.id} className="rounded-2xl border border-gray-200 bg-white p-4 shadow-sm md:p-6">
                    <div className="space-y-4 md:flex md:items-center md:justify-between md:gap-6 md:space-y-0">
                      <Link href={`/product-details/${item.id}`} className="shrink-0 md:order-1">
                        <Image
                          width={200}
                          height={100}
                          className="h-20 w-20"
                          src={item.images && item.images.length > 0 ? item.images[0] : '/fallback-image.png'}
                          alt={item.title}
                        />
                      </Link>
                      <div className="flex items-center justify-between md:order-3 md:justify-end">
                        <div className="flex items-center">
                          <button
                            type="button"
                            onClick={() => handleDecrement(item)}
                            className="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-100"
                          >
                            <Minus className="w-3 h-3" />
                          </button>
                          <input
                            type="text"
                            className="w-10 shrink-0 border-0 bg-transparent text-center text-sm font-medium text-gray-900 focus:outline-none focus:ring-0"
                            value={item.quantity}
                            readOnly
                          />
                          <button
                            type="button"
                            onClick={() => handleIncrement(item)}
                            className="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-100"
                          >
                            <Plus className="w-3 h-3" />
                          </button>
                        </div>
                        <div className="text-end md:order-4 md:w-32">
                          <p className="text-base font-bold text-gray-900">{item.totalPrice.toFixed(2)} Dhs</p>
                        </div>
                      </div>
                      <div className="w-full min-w-0 flex-1 space-y-4 md:order-2 md:max-w-md">
                        <p className="text-base font-medium text-gray-900">{item.title}k</p>
                        <div className="flex items-center gap-5">
                          <Dialog>
                            <DialogTrigger asChild>
                              <button
                                type="button"
                                onClick={() => setItemToRemove(item)}
                                className="inline-flex items-center text-sm font-medium text-red-600 hover:underline"
                              >
                                <X className="w-4 h-4 mr-1" /> Remove
                              </button>
                            </DialogTrigger>
                            <DialogContent>
                              <DialogTitle>Remove Item</DialogTitle>
                              <DialogDescription>
                                Are you sure you want to remove <strong>{item?.title}</strong> from your cart? This action
                                cannot be undone.
                              </DialogDescription>
                              <DialogFooter>
                                <Button variant="ghost" onClick={() => setItemToRemove(null)}>
                                  Cancel
                                </Button>
                                <Button variant="destructive" onClick={handleRemove}>
                                  Remove
                                </Button>
                              </DialogFooter>
                            </DialogContent>
                          </Dialog>
                        </div>
                      </div>
                    </div>
                  </div>
                )))}
              </div>
            </div>
            <div className="mx-auto mt-6 max-w-4xl flex-1 space-y-6 lg:mt-0 lg:w-full">
              <div className="space-y-4 rounded-2xl border border-gray-200 bg-white p-4 shadow-sm sm:p-6">
                <p className="text-xl font-semibold text-gray-900">Order summary</p>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <dl className="flex items-center justify-between gap-4">
                      <dt className="text-base font-normal text-gray-500">Total Price</dt>
                      <dd className="text-base font-medium text-gray-900">{totalAmount} Dhs</dd>
                    </dl>
                  </div>
                  <Link
                    href="/cart/checkout"
                    className="flex w-full items-center justify-center rounded-full bg-black px-5 py-2.5 text-sm font-medium text-white"
                  >
                    Proceed to Checkout
                  </Link>
                  <div className="flex items-center justify-center gap-2">
                    <span className="text-sm font-normal text-gray-500"> or </span>
                    <Link
                      href="/"
                      className="inline-flex items-center gap-2 text-sm font-medium text-primary-700 underline hover:no-underline"
                    >
                      Back to Home
                      <svg
                        className="h-5 w-5"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 18 18"
                      >
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m6 13 4-4-4-4" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}