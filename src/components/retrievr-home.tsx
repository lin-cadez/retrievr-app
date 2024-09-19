
"use client"
import "./wani.css"
import { useState, useEffect } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search, CheckCircle, Building2, Users } from "lucide-react"
import Link from "next/link"
import CountUp from 'react-countup'
import { Mail, Phone, MapPin } from 'lucide-react'
import { writeHeapSnapshot } from "v8"

export default function RetrievrHome() {

  const impactData = [
    { value: 10000, label: 'Items Found', suffix: '+' },
    { value: 95, label: 'Return Rate', suffix: '%' },
    { value: 500, label: 'Partner Organizations', suffix: '+' },
    { value: 9500, label: 'Happy Customers', suffix: '+' },
  ]

  const steps = [
    "Sign up for an account with Retrievr.",
    "Set up your organization's lost and found page.",
    "Start managing and tracking lost items with ease.",
    "Return lost items quickly to their rightful owners."
  ]


  const [inView, setInView] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true)
          observer.disconnect()
        }
      },
      { threshold: 0.1 }
    )

    const impactSection = document.getElementById('impact-section')
    if (impactSection) {
      observer.observe(impactSection)
    }

    return () => observer.disconnect()
  }, [])




  
  return (
    <div className="flex flex-col min-h-screen">
      <header className="px-4 lg:px-6 h-14 flex items-center">
        <Link className="flex items-center justify-center" href="#">
          <Search className="h-6 w-6 text-current" /> {/* Use text-current if inheriting color */}
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
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 light-blue-gradient  dark:from-gray-900 dark:to-gray-800">
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
                  <Link href="/lost-items" passHref>
                    <Button type="button">
                      <Search className="h-4 w-4" />
                      <span className="sr-only">Search</span>
                    </Button>
                  </Link>
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
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="flex flex-col items-center text-center space-y-8">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">How Easy It Is to Set Up</h2>
          <p className="max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400 dark:bg-gray-800">
            Getting started with Retrievr is quick and simple. In just a few steps, you can have an organized lost-and-found
            system for your organization.
          </p>
          <div className="w-full max-w-xl space-y-6">
            {steps.map((step, index) => (
              <div key={index} className="flex items-center">
                <div className="h-10 w-10 bg-primary text-primary-foreground flex items-center justify-center rounded-full">
                  <CheckCircle className="h-6 w-6" />
                  <span className="sr-only">Step {index + 1}</span>
                </div>
                <p className="ml-4 text-lg text-gray-600 dark:text-gray-300">{step}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
    <section className="w-full py-12 md:py-24 lg:py-32 bg-background">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
          <div className="flex flex-col justify-center space-y-4">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Contact Us</h2>
            <p className="text-muted-foreground md:text-lg">
              Have questions or need assistance? Get in touch with our team.
            </p>
            <div className="space-y-2">
              <div className="flex items-center space-x-2 text-muted-foreground">
                <Mail className="h-5 w-5" />
                <p>info@retrievr.com</p>
              </div>
              <div className="flex items-center space-x-2 text-muted-foreground">
                <Phone className="h-5 w-5" />
                <p>(555) 123-4567</p>
              </div>
              <div className="flex items-center space-x-2 text-muted-foreground">
                <MapPin className="h-5 w-5" />
                <p>123 Main St, Anytown, USA 12345</p>
              </div>
            </div>
          </div>
          <div id="impact-section" className="flex flex-col justify-center space-y-4">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Our Impact</h2>
            <div className="grid grid-cols-2 gap-4 sm:gap-6">
              {impactData.map((item, index) => (
                <div key={index} className="flex flex-col items-center space-y-2 p-4 bg-muted rounded-lg">
                  <h3 className="text-2xl sm:text-3xl font-bold">
                    {inView ? (
                      <CountUp end={item.value} suffix={item.suffix} duration={2.5} />
                    ) : (
                      `0${item.suffix}`
                    )}
                  </h3>
                  <p className="text-sm text-muted-foreground text-center">{item.label}</p>
                </div>
              ))}
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
