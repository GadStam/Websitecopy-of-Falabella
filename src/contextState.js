import React from 'react';

export const CarritoContext = React.createContext();

const CarritoProvider = (props) => {
    const [carrito, setCarrito] = React.useState([]);


    return <CarritoContext.Provider value={{carrito, setCarrito}}>{props.children}</CarritoContext.Provider>
}

export default CarritoProvider;