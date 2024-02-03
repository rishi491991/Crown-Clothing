import { createContext,useState } from "react";

// as the actual value you want to access
export const FavoritesContext = createContext({
    favorites: null,
    setFavorites: () => null,
});

export const FavoritesProvider = ({children}) => {
    const [favorites, setFavorites] = useState([]);
    const value = {favorites, setFavorites};
    
    return <FavoritesContext.Provider value={value}>{children}</FavoritesContext.Provider>
}
