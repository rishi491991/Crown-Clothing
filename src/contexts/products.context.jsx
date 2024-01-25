import { createContext, useState, useEffect } from "react";
// as the actual value you want to access
import PRODUCTS from '../shop-data.json';

export const ProductsContext = createContext({
    products:null,
});

export const ProductsProvider = ({children}) => {
    const [products, setProducts] = useState(PRODUCTS);
    const value = {products, setProducts};
    
    return <ProductsContext.Provider value={value}>{children}</ProductsContext.Provider>
}
