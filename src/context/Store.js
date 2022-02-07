import React, {createContext, useEffect, useReducer} from "react";   
import Reducer from './Reducer';
                                                                                                                                                                       
const initialState = {tweets : [], tweet : null}       
                                                                                                                             
export const Context = createContext(initialState);                                                                      
                                                                                
const Store = ({children}) => {    

    const [state, dispatch] = useReducer(Reducer, initialState); 
    
    return (                                                                    
        <Context.Provider value={[state, dispatch]}>                            
            {children}                                                          
        </Context.Provider>                                                     
    )                                                                           
};  

export default Store;