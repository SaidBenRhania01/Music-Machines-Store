import { Clock, Truck, Shield, RefreshCcw } from "lucide-react"

export const Features = () => {
  const features = [
    {
      icon: Clock,
      title: "Free Support 24/7",
      description: "Our dedicated team is available round the clock to assist you.",
    },
    {
      icon: Truck,
      title: "Free Shipping over 1000DH",
      description: "Enjoy complimentary shipping on orders exceeding 1000DH.",
    },
    {
      icon: Shield,
      title: "Up to 5 Years Warranty",
      description: "We stand behind our products with extended warranty options.",
    },
    {
      icon: RefreshCcw,
      title: "Free Exchange up to 7 Days",
      description: "Not satisfied? Exchange your purchase within a week, no questions asked.",
    },
  ]

  return (
    <div className="py-8 md:py-10 lg:py-12">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mx-auto max-w-2xl lg:max-w-none">
          <div className="grid gap-y-3 gap-x-2 lg:gap-y-8 lg:gap-x-6 grid-cols-2 lg:grid-cols-4">
            {features.map((feature, index) => (
              <div key={index} className="bg-white px-6 py-3 rounded-xl border">
                <div className="flex flex-col items-center text-center">
                  <div className="flex h-14 w-14 lg:h-16 lg:w-16 items-center justify-center rounded-full bg-black text-white mb-4">
                    <feature.icon className="h-7 w-7 lg:h-8 lg:w-8" />
                  </div>
                  <h3 className="text-base lg:text-lg font-semibold text-black">{feature.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}