"use client"

import "react-responsive-carousel/lib/styles/carousel.min.css"
import { Carousel } from 'react-responsive-carousel'

export default function Banner() {
  return (
    <section className="relative">
      <div className="absolute w-full h-32 bg-gradient-to-t from-white/80 to-transparent bottom-0 z-10 pointer-events-none"/>
      <Carousel
        autoPlay={true}
        infiniteLoop={true}
        showStatus={false}
        showIndicators={false}
        showThumbs={false}
        interval={5000}
      >
        <div>
            <img loading="lazy" src="https://m.media-amazon.com/images/I/71aQ3u78A3L._SX3000_.jpg" />
        </div>
        
        <div>
            <img loading="lazy" src="https://m.media-amazon.com/images/I/71dbxIcDioL._SX3000_.jpg" />
        </div>
        
        <div>
            <img loading="lazy" src="https://m.media-amazon.com/images/I/71tIrZqybrL._SX3000_.jpg" />
        </div>
      </Carousel>
    </section>
  )
}