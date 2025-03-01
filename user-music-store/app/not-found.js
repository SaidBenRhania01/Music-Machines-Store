import Image from "next/image"
import Link from "next/link"

export default function Component() {
  return (
    <div className="flex flex-col items-center justify-center bg-background px-4 py-12 sm:px-6 lg:px-8 sm:py-24 lg:py-40">
      <div className="mx-auto max-w-md text-center">
        <h1 className="font-semibold text-9xl">404</h1>
        <h1 className="mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">Oops, page not found</h1>
        <p className="mt-4 text-muted-foreground">
          The page you&apos;re looking for doesn&apos;t seem to exist. Don&apos;t worry, you can head back to the homepage and try
          again.
        </p>
        <div className="mt-6">
          <Link
            href="/"
            className="inline-flex items-center bg-black rounded-full px-6 py-2.5 text-sm font-medium text-primary-foreground shadow-sm transition-colors hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
            prefetch={false}
          >
            Go to Homepage
          </Link>
        </div>
      </div>
    </div>
  )
}