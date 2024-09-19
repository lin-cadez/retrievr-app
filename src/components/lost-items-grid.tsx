'use client'

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { CalendarIcon, MapPinIcon, UserIcon } from "lucide-react"
import Image from "next/image"

// Define the structure of a lost item
interface LostItem {
  id: number
  name: string
  image: string
  dateFound: string
  location: string
  foundBy: string
}

// Sample data (in a real application, this would come from an API or database)
const lostItems: LostItem[] = [
  {
    id: 1,
    name: "Polnilec",
    image: "/filac.jpg",
    dateFound: "2024-09-18",
    location: "Knjižnica, 2. nadstropje",
    foundBy: "Martin Novak"
  },
  {
    id: 2,
    name: "Steklenica",
    image: "/flasa.jpg",
    dateFound: "2024-07-16",
    location: "Jedilnica",
    foundBy: "Miha Kovač"
  },
  {
    id: 3,
    name: "Telefon",
    image: "/fon.jpg",
    dateFound: "2024-07-17",
    location: "Fitnes",
    foundBy: "Aljaž Humnik"
  },
  {
    id: 4,
    name: "Kapa",
    image: "/kapa.jpg",
    dateFound: "2024-02-17",
    location: "Klet",
    foundBy: "Maja Kovač"
  },
  {
    id: 5,
    name: "Računalnik",
    image: "/komp.jpg",
    dateFound: "2024-03-19",
    location: "Učilnica 211",
    foundBy: "Nejc Bosko"
  },
  {
    id: 6,
    name: "Slušalke",
    image: "/slusalke.jpg",
    dateFound: "2024-06-27",
    location: "Kavarna",
    foundBy: "Maj Linhart"
  },
  // Add more items as needed
]

export default function LostItemsGridComponent() {
  const handleClaim = (id: number) => {
    console.log(`Claiming item with id: ${id}`)
    window.open(`product-chat?id=${id}`, "_self")
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-6">Lost and Found Items</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {lostItems.map((item) => (
          <Card key={item.id} className="flex flex-col">
            <CardHeader>
              <Image
                src={item.image}
                alt={`Lost item ${item.id}`}
                width={200}
                height={200}
                className="w-full h-72 object-cover rounded-t-lg"
              />
            </CardHeader>
            <CardContent className="flex-grow">
              <CardTitle className="text-lg mb-2">{item.name}</CardTitle>
              <div className="space-y-2">
                <div className="flex items-center text-sm text-muted-foreground">
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  <span>Found on {item.dateFound}</span>
                </div>
                <div className="flex items-center text-sm text-muted-foreground">
                  <MapPinIcon className="mr-2 h-4 w-4" />
                  <span>{item.location}</span>
                </div>
                <div className="flex items-center text-sm text-muted-foreground">
                  <UserIcon className="mr-2 h-4 w-4" />
                  <span>Found by {item.foundBy}</span>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button className="w-full" onClick={() => handleClaim(item.id)}>
                Claim Item
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
}
