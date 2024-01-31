import { createContext, useState, useEffect} from "react";
// as the actual value you want to access
// import SHOP_DATA from '../shop-data';

// import { setCollectionToDB } from "../utils/firebase/firebase.utils";
import { getCollectionFromDB } from "../utils/firebase/firebase.utils";

export const CategoriesContext = createContext({
    categoryMap: {},
    setCategoryMap: () => null,
});

export const CategoriesProvider = ({children}) => {
    const [categoryMap, setCategoryMap] = useState({});
    const value = {categoryMap};

//To add new Collection to the DataBase from frontend use this function
    // useEffect(()=>{
    //     setCollectionToDB('categories', SHOP_DATA)
    // },[])
    useEffect( ()=>{
        const getCollection = async () => {
             const categoryMap =await getCollectionFromDB()
             console.log(categoryMap)
             setCategoryMap(categoryMap)
        }
        
        getCollection();

        
        },[])

    
    return <CategoriesContext.Provider value={value}>{children}</CategoriesContext.Provider>
}
