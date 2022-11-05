import React from "react";

export const initialState = {
    carrito:{
        listaProductos:[]
    }
}
    



export const ActionTypes = {
    setCarrito:'SET_CARRITO',
}

export const reducer = (state = {}, action) => {
    switch(action.type){
        case ActionTypes.setCarrito:
            const foo= {
                ...state,
                carrito: {...action.value}
            }
            console.log(foo)
            console.log(action.value)
            return foo;
       
    }
}

export const initialContext = {
    contextState: initialState,
    setContextState: () => {},
}

const Cont = React.createContext(initialContext)

export function ContextProvider ({children,initial=initialState}){
    const [state,dispatch] = React.useReducer(reducer,initial);

    const contextState = state
    const setContextState = dispatch;

    return <Cont.Provider value={{contextState,setContextState}}>{children}</Cont.Provider>
}

export const useContextState = () => React.useContext(Cont)