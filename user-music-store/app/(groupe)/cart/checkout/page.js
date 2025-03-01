'use client'

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import confetti from 'canvas-confetti';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { resetCart } from '@/lib/features/cart/cartSlice';

export default function Component() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const dispatch = useAppDispatch();
  const cartItems = useAppSelector((state) => state.cart.itemList);
  const totalAmount = cartItems.reduce((total, item) => total + item.totalPrice, 0).toFixed(2);
  const router = useRouter();

  const triggerConfetti = () => {
    const duration = 5 * 1000;
    const animationEnd = Date.now() + duration;
    const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

    const randomInRange = (min, max) => Math.random() * (max - min) + min;

    const interval = window.setInterval(() => {
      const timeLeft = animationEnd - Date.now();

      if (timeLeft <= 0) {
        return clearInterval(interval);
      }

      const particleCount = 50 * (timeLeft / duration);
      confetti({
        ...defaults,
        particleCount,
        origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 },
      });
      confetti({
        ...defaults,
        particleCount,
        origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 },
      });
    }, 250);
  };

  const handleOrderSubmit = async (event) => {
    event.preventDefault();
  
    setError(null);
    setLoading(true);
  
    const formData = new FormData(event.target);
    const orderData = {
      name: formData.get('name'),
      email: formData.get('email'),
      phone: formData.get('phone'),
      address: formData.get('address'),
      products: cartItems.map((item) => ({
        id: item.id,
        quantity: item.quantity,
      })),
    };
  
    try {
      const response = await fetch('https://user-music-store.vercel.app/api/orders/add-order', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(orderData),
      });
  
      const result = await response.json();
  
      if (result.success) {
        triggerConfetti();
        dispatch(resetCart());
        router.push('/congratulations');
      } else {
        setError(result.message || 'An error occurred while placing the order.');
      }
    } catch (err) {
      setError('Failed to connect to the server. Please try again.');
      console.error('Order submission failed:', err);
    } finally {
      setLoading(false);
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
            <li>
              <Link href="/cart" className="text-gray-500 hover:text-black font-medium">
                Cart
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
              Checkout
            </li>
          </ol>
        </nav>
      </div>
      <div className="mx-auto w-full max-w-7xl px-4 py-8 md:py-10 space-y-8">
        <h1 className="text-xl md:text-2xl lg:text-3xl font-bold">Shipping Address</h1>
        <div className="grid gap-8 lg:gap-10 lg:grid-cols-2">
          <form className="space-y-6" onSubmit={handleOrderSubmit}>
            <div className="space-y-2">
              <input 
                id="name"
                name="name"
                type="text"
                placeholder="Full Name" 
                required 
                className='border outline-none rounded-full w-full bg-gray-100 text-gray-600 text-sm px-5 py-2 md:py-3 min-w-0' 
              />
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="space-y-4">
                <input 
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Email" 
                  required 
                  className='border outline-none rounded-full w-full bg-gray-100 text-gray-600 text-sm px-5 py-2 md:py-3 min-w-0' 
                />
              </div>
              <div className="space-y-4">
                <input
                  id="phone"
                  name="phone"
                  type="text"
                  placeholder="Phone"
                  required
                  className="border outline-none rounded-full w-full bg-gray-100 text-gray-600 text-sm px-5 py-2 md:py-3 min-w-0"
                  onInput={(e) => {
                    e.target.value = e.target.value.replace(/\D/g, ""); // Remove all non-numeric characters
                  }}
                />
              </div>
            </div>
            <div className="space-y-4">
              <input 
                id="address"
                name="address"
                type="text"
                placeholder="Address" 
                required 
                className='border outline-none rounded-full w-full bg-gray-100 text-gray-600 text-sm px-5 py-2 md:py-3 min-w-0' 
              />
            </div>
            <button 
              type="submit"
              disabled={loading}
              className={`flex items-center justify-center gap-x-2 w-auto px-5 py-2.5 md:py-3 text-sm rounded-full sm:mb-0 ${
                loading ? 'bg-gray-400' : 'bg-black text-white'
              }`}
            >
              {loading ? 'Processing...' : 'Order Now'}
            </button>
            {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
          </form>
          <Card>
            <CardHeader>
              <h1 className='font-semibold text-xl'>Order Summary</h1>
            </CardHeader>
            <CardContent className="space-y-4">
              {cartItems.map((item) => (
                <div key={item.id} className="flex items-center space-x-4">
                  <div className="h-20 w-20 overflow-hidden rounded-md border">
                    <Image
                      src={item.images[0]}
                      alt={item.title}
                      width={80}
                      height={40}
                      className="h-full w-full object-contain"
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-medium">{item.title}</h3>
                    <div className="mt-1 flex items-center justify-between">
                      <span className="text-sm">{item.quantity}x</span>
                      <span className="font-medium">{item.price.toFixed(2)} Dhs</span>
                    </div>
                  </div>
                </div>
              ))}
              <hr />
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Subtotal</span>
                  <span>{totalAmount}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Shipping</span>
                  <span>0.00 Dhs</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Taxes</span>
                  <span>0.00 Dhs</span>
                </div>
              </div>
              <hr />
              <div className="flex justify-between font-bold">
                <span>Total</span>
                <span>{totalAmount} Dhs</span>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
