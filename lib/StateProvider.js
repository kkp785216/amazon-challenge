import React, { createContext, useState } from "react";

// Prepare the data layer
export const StateContext = createContext();

// Wrap our app and provide the data layer
export const StateProvider = ({ reducer, initialStage, children }) => {

    const [cart, setCart] = useState({ items: 5, price: 1250 });

    return (
        <StateContext.Provider value={{ cart, setCart }}>
            {children}
        </StateContext.Provider>
    )
}