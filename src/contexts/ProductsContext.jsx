import { createContext, useEffect, useState } from "react";




export const ProductsContext = createContext()

const ProductProvider = ({children}) => {
    const [products, setProducts] = useState([])
    // fetch products
    useEffect(() => {
        const fetchProducts = async () =>{
            const response = await fetch('https://shopifyn-service.onrender.com/products')
            const data = await response.json()
            setProducts(data)
        }
        fetchProducts()
    }, [])

    return <ProductsContext.Provider value={{products}}>
        {children}
    </ProductsContext.Provider>
}

export default ProductProvider