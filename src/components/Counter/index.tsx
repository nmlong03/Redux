import { CounterContext } from "../../context/counter";
import { useContext } from "react";
import { Button } from "..";
const Counter = () => {
    const { state, dispatch } = useContext(CounterContext);
    return (
        <div>
            Counter: {state?.count}
            <Button type="primary" onClick={() => dispatch({ type: "INCREMENT" })}>
                Increment
            </Button>
            <Button type="primary" onClick={() => dispatch({ type: "DECREMENT" })}>
                Decrement
            </Button>
            <Button type="primary" onClick={() => dispatch({ type: "INCREASE" , payload: 10})}>
            INCREASE
            </Button>

        </div>
    );
};

export default Counter;