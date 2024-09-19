"use client"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { SendIcon } from "lucide-react"

interface Message {
  id: number
  text: string
  sender: "user" | "agent"
}

interface Product {
  name: string
  image: string
  price: string
  description: string
}

export default function ProductChatComponent() {
  const [messages, setMessages] = useState<Message[]>([
    { id: 1, text: "Hello! Would you like to claim this product? ", sender: "agent" },
    { id: 2, text: "Yes, I have lost it Tuesday.", sender: "user" },
    { id: 3, text: "Sure that sounds right. They were found 3 days ago, you can pick it up tommorow at 12.00.", sender: "agent" },
  ])
  const [inputMessage, setInputMessage] = useState("")

  const product: Product = {
    name: "Wireless Noise-Cancelling Headphones",
    image: "/slusalke.jpg",
    price: "Found in Library",
    description: "Black color, brand: JBL.",
  }

  const handleSendMessage = () => {
    if (inputMessage.trim()) {
      setMessages([...messages, { id: messages.length + 1, text: inputMessage, sender: "user" }])
      setInputMessage("")
    }
  }

  return (
    <div className="flex flex-col h-[calc(100vh-4rem)] max-w-3xl mx-auto p-4">
      <div className="flex flex-col md:flex-row h-full">
        <div className="w-full md:w-2/3 flex flex-col">
          <ScrollArea className="flex-grow mb-4 border rounded-lg p-4">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`mb-4 ${
                  message.sender === "user" ? "text-right" : "text-left"
                }`}
              >
                <span
                  className={`inline-block p-2 rounded-lg ${
                    message.sender === "user"
                      ? "bg-primary text-primary-foreground"
                      : "bg-muted"
                  }`}
                >
                  {message.text}
                </span>
              </div>
            ))}
          </ScrollArea>
          <div className="flex gap-2">
            <Input
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
              placeholder="Type your message..."
              onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
            />
            <Button onClick={handleSendMessage}>
              <SendIcon className="h-4 w-4" />
              <span className="sr-only">Send message</span>
            </Button>
          </div>
        </div>
        <Card className="w-full md:w-1/3 mt-4 md:mt-0 md:ml-4">
          <CardHeader>
            <CardTitle>{product.name}</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="aspect-square relative mb-4">
              <Image
                src={product.image}
                alt={product.name}
                fill
                className="object-cover rounded-lg"
              />
            </div>
            <p className="font-bold mb-2">{product.price}</p>
            <p className="text-sm text-muted-foreground">{product.description}</p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}