import { Products } from "../typing"
import Product from "./Product"

async function fetchProducts() {
    const res = await fetch("http://fakestoreapi.com/products")
    const products: Products[] = await res.json()
    return products
}

export default async function ProductFeed() {
    const products = await fetchProducts()

    return (
        <section className="grid grid-flow-row-dense md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 md:-mt-52">
            {products.slice(0, 4).map(product => (
                <Product key={product.title} {...product} />
            ))}
            
            <img className="md:col-span-full" loading="lazy" src="https://images-na.ssl-images-amazon.com/images/G/01/DiscoTec/2022/HOL22/ShoulderPeriod/LP/SP_W1_LP_Footer_Hol_M_1500x125.jpg" alt="Banner"/>
            
            <div className="md:col-span-2">
                {products.slice(4, 5).map(product => (
                    <Product key={product.title} {...product} />
                ))}
            </div>
            
            {products.slice(5, products.length).map(product => (
                <Product key={product.title} {...product} />
            ))}
        </section>
    )
}
