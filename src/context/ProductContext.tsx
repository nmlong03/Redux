import { instance } from "@/axios/config";
import { productReducer } from "@/reducers/productReducer";
import { pause } from "@/utils/pause";
import { produce } from "immer";
import { createContext, useReducer, useState } from "react";

export const ProductContext = createContext({} as any);
type ProductProviderProps = {
    children: React.ReactNode;
};

const ProductProvider = ({ children }: ProductProviderProps) => {
    // const [products, setProduct] = useState<any[]>([])
    // const [isLoading, setIsLoading] = useState<boolean>(false)
    // const [error, setError] = useState<string>("")
    const initialState = {
        products: [],
        isLoading: false,
        error: "",
    };

   
    const [state, dispatch] = useReducer(produce(productReducer), initialState);
    return (
        <ProductContext.Provider value={{state,dispatch}}>
            {children}
        </ProductContext.Provider>
        
    )
}
export default ProductProvider;