import "./wani.css"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search, Camera, Clock, Database, Building2, Users } from "lucide-react"
import Link from "next/link"

export default function RetrievrHome() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="px-4 lg:px-6 h-14 flex items-center">
        <Link className="flex items-center justify-center" href="#">
          <Camera className="h-6 w-6 text-current" /> {/* Use text-current if inheriting color */}
          <span className="ml-2 text-lg font-bold">Retrievr</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
            Home
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="/lost-items">
            Search
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
            How It Works
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
            Contact
          </Link>
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-800">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  Find Your Lost Items with <p className="wani-wana">Retrievr</p>
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                  Efficient and organized management for lost and found items for your organization.
                </p>
              </div>
              <div className="w-full max-w-sm space-y-2">
                <form className="flex space-x-2">
                  <Input className="max-w-lg flex-1" placeholder="Search for your lost item" type="text" />
                  <Button type="submit">
                    <Search className="h-4 w-4" />
                    <span className="sr-only">Search</span>
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter text-center mb-12">Perfect for Various Organizations</h2>
            <div className="grid gap-6 lg:grid-cols-4 lg:gap-12">
              <div className="flex flex-col items-center space-y-4 text-center">
                {/* Apply text color class directly */}
                <Building2 className="h-10 w-10 text-blue-500" /> {/* Add text color class */}
                <h3 className="text-xl font-bold">Airports</h3>
              </div>
              <div className="flex flex-col items-center space-y-4 text-center">
                <Users className="h-10 w-10 text-green-500" /> {/* Add text color class */}
                <h3 className="text-xl font-bold">Auditoriums</h3>
              </div>
              <div className="flex flex-col items-center space-y-4 text-center">
                <Building2 className="h-10 w-10 text-purple-500" /> {/* Add text color class */}
                <h3 className="text-xl font-bold">Stadiums</h3>
              </div>
              <div className="flex flex-col items-center space-y-4 text-center">
                <Building2 className="h-10 w-10 text-red-500" /> {/* Add text color class */}
                <h3 className="text-xl font-bold">Universities</h3>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
              <div className="flex flex-col justify-center space-y-4">
                <h2 className="text-3xl font-bold tracking-tighter">Contact Us</h2>
                <p className="text-gray-500 dark:text-gray-400">
                  Have questions or need assistance? Get in touch with our team.
                </p>
                <div className="space-y-2">
                  <p className="text-sm text-gray-500">Email: info@retrievr.com</p>
                  <p className="text-sm text-gray-500">Phone: (555) 123-4567</p>
                  <p className="text-sm text-gray-500">Address: 123 Main St, Anytown, USA 12345</p>
                </div>
              </div>
              <div className="flex flex-col justify-center space-y-4">
                <h2 className="text-3xl font-bold tracking-tighter">Our Impact</h2>
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex flex-col items-center space-y-2">
                    <h3 className="text-2xl font-bold">10,000+</h3>
                    <p className="text-sm text-gray-500">Items Found</p>
                  </div>
                  <div className="flex flex-col items-center space-y-2">
                    <h3 className="text-2xl font-bold">95%</h3>
                    <p className="text-sm text-gray-500">Return Rate</p>
                  </div>
                  <div className="flex flex-col items-center space-y-2">
                    <h3 className="text-2xl font-bold">500+</h3>
                    <p className="text-sm text-gray-500">Partner Organizations</p>
                  </div>
                  <div className="flex flex-col items-center space-y-2">
                    <h3 className="text-2xl font-bold">9,500+</h3>
                    <p className="text-sm text-gray-500">Happy Customers</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-gray-500 dark:text-gray-400">© 2024 Retrievr. All rights reserved.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Terms of Service
          </Link>
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Privacy Policy
          </Link>
        </nav>
      </footer>
    </div>
  )
}
