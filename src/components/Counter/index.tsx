// import { CounterContext } from "../../context/counter";
// import { useContext } from "react";
import { Button } from "..";
import { useSelector, useDispatch } from "react-redux";
const Counter = () => {
    const dispatch = useDispatch();
    const { count } = useSelector((state: any) => state);
    return (
        <div>
            Counter: {count}
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