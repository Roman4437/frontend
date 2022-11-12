import Image from "next/image"
import { Bars4Icon, MagnifyingGlassIcon, ShoppingCartIcon } from '@heroicons/react/24/outline'

export default function Header() {
  return (
    <header className="sticky top-0 z-50">
        <nav className="flex justify-between items-center bg-cyan-700 py-3 px-4 h-16">
            <Image 
                src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg"
                width={100}
                height={50}
                alt="Amazon"
                className="mr-4 cursor-pointer object-contain"
            />
            <div className="hidden sm:flex flex-grow bg-cyan-400 hover:bg-cyan-300 items-center h-10 rounded-sm cursor-pointer">
                <input className="p-2 px-3 h-full w-6 flex-grow flex-shrink rounded-l-sm outline-none" type="text" />
                <MagnifyingGlassIcon className="h-12 p-4 text-cyan-700"/>
            </div>
            <div className="flex text-white items-center text-xs space-x-6 whitespace-nowrap ml-4">
                <div className="link">
                    <p>Hello, user</p>
                    <p className="font-extrabold sm:font-bold">Accountm & Lists</p>
                </div>
                
                <div className="link">
                    <p>Returns</p>
                    <p className="font-extrabold sm:font-bold">& Orders</p>
                </div>
                
                <div className="link relative">
                    <span className="absolute w-4 h-4 text-center bg-cyan-400 rounded-full right-[-3px]">0</span>

                    <ShoppingCartIcon className="h-8 md:h-4"/>
                    <p className="font-extrabold sm:font-bold hidden md:inline">Basket</p>
                </div>
            </div>
        </nav>
        <div className="flex items-center space-x-8 lg:text-sm lg:space-x-4 px-4 py-2 bg-[#0F1111] text-white h-10">
            <p className="flex link items-center">
                <Bars4Icon className="h-5 mr-2"/>
                All
            </p>
            <p className="link">Prime Video</p>
            <p className="link">Amazon Business</p>
            <p className="link">Today's Deals</p>
            <p className="link hidden lg:inline-flex">Electronics</p>
            <p className="link hidden lg:inline-flex">Food & Grocery</p>
            <p className="link hidden lg:inline-flex">Prime</p>
            <p className="link hidden lg:inline-flex">Buy Again</p>
            <p className="link hidden lg:inline-flex">Shopper Toolkit</p>
            <p className="link hidden lg:inline-flex">Health & Personal Care</p>
        </div>
    </header>
  )
}

