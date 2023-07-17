import { createContext, useReducer, useState } from "react";
import { produce } from 'immer'

export const CounterContext = createContext({} as any);

type CounterProviderProps = {
    children: React.ReactNode;
};
const initialState = {
    count: 0,
    isLoading: false,
    error: ''
};

export const counterReducer = (state: any, action: any) => {
    console.log(action);
    console.log(state);
    
    
    switch (action.type) {
        case "INCREMENT":
            state.count++;
            return;
        case "DECREMENT":
            state.count--;
            return;
        case "INCREASE":
            state.count += action.payload;
            return;
        default:
            return state;
    }
};
const CounterProvider = ({ children }: CounterProviderProps) => {
    const [state, dispatch] = useReducer(produce(counterReducer), initialState)
    return (
        <CounterContext.Provider value={{ state, dispatch }}>{children}</CounterContext.Provider>
    );
};
export default CounterProvider;
