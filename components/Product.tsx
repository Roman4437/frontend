"use client"

import Image from "next/image"
import { useState } from "react"
import { StarIcon } from "@heroicons/react/24/solid"
import Currency from "react-currency-formatter"

interface ProductProps {
    id: number
    title: string
    price: number
    description: string
    category: string
    image: string
}

const MAX_RATING = 6
const MIN_RATING = 1

export default function Product({id, title, price, description, category, image}: ProductProps) {
    const [rating] = useState(
        Math.floor(Math.random() * (MAX_RATING - MIN_RATING + 1) + MIN_RATING)
    )
  
    return (
    <div className="relative flex flex-col m-5 bg-white z-30 p-10">
        <p className="absolute top-2 right-2 text-xs italic text-gray-400 -z-40">{category}</p>

        <Image className="self-center object-contain h-[200px]" src={image} width={200} height={200} alt={title}/>

        <h4 className="m-3">{title}</h4>
        
        <div className="flex">
            {Array(rating)
                .fill('')
                .map(() => (
                <StarIcon className="h-5 text-yellow-500"/>
            ))}
        </div>

        <p className="text-xs my-2 line-clamp-2">{description}</p>

        <div className="mb-5">
            <Currency quantity={price}/>
        </div>

        <button className="mt-auto button">Add to Basket</button>
    </div>
  )
}
