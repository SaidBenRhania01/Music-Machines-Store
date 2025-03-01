import React from 'react'
import Image from 'next/image'
import { ArrowRight, Clock } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import Drums from "@/images/Drums.png"

export default function Deal({ 
  imageUrl = Drums, 
  productName = "ALESIS TURBO MESH 8PCS DRUM KIT",
  description = "Discover the Alesis Turbo Mesh 8pcs Electric Drum Kit at Melodica Music Store, now available at its lowest price ever! Ideal for both home and studio use.",
  originalPrice = 1299,
  discountedPrice = 499,
  discountPercentage = 66
}) {
  return (
    <div className="bg-gradient-to-br from-black/80 via-black/90 to-black text-white overflow-hidden">
      <div className="px-6 py-12 md:py-16 lg:py-20 max-w-7xl mx-auto grid md:grid-cols-2 gap-x-12 gap-y-8 items-center">
        <div className="relative flex items-center justify-center p-4 transition-transform hover:scale-105">
          <Image
            src={imageUrl}
            alt={productName}
            width={450}
            height={450}
            className="object-contain"
          />
          <Badge className="absolute top-4 left-4 bg-red-500 text-white">
            DEAL OF THE WEEK
          </Badge>
        </div>
        <div className="space-y-6">
          <div className="space-y-2">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
              {productName.split(' ').map((word, index) => (
                <span key={index} className={index % 2 === 0 ? 'text-white' : 'text-yellow-400'}>
                  {word}{' '}
                </span>
              ))}
            </h1>
          </div>

          <p className="text-gray-300 line-clamp-3">
            {description}
          </p>

          <div className="flex items-center space-x-4">
            <Clock className="text-red-600" />
            <p className="text-red-600 font-semibold">Limited Time Offer</p>
          </div>

          <div className="space-y-2">
            <p className="text-2xl md:text-4xl font-bold">
              {discountedPrice} Dhs <span className="ml-2 text-lg text-gray-400 line-through">{originalPrice} Dhs</span>
            </p>
            <p className="text-green-400 font-bold text-xl">
              Save {discountPercentage}% Today!
            </p>
          </div>

          <Button className="bg-yellow-400 text-black hover:bg-yellow-500 px-8 py-6 rounded-full font-bold text-lg transition-all hover:opacity-95">
            BUY NOW <ArrowRight className="ml-2" />
          </Button>
        </div>
      </div>
    </div>
  )
}