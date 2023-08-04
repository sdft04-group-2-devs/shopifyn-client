import { createContext, useEffect, useState } from "react";




export const ProductsContext = createContext()

const ProductProvider = ({children}) => {
    const [products, setProducts] = useState([])
    // fetch products
    useEffect(() => {
        const fetchProducts = async () =>{
            const response = await fetch('http://localhost:3000/products')
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