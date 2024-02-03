import { createContext,useState } from "react";

// as the actual value you want to access
export const OrdersContext = createContext({
    orders: null,
    setOrders: () => null,
});

export const OrdersProvider = ({children}) => {
    const [orders, setOrders] = useState([]);
    const value = {orders, setOrders};
    
    return <OrdersContext.Provider value={value}>{children}</OrdersContext.Provider>
}
