import { fetchProducts } from "@/actions/product";
import { Dispatch, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const Cart = () => {
    const dispatch: Dispatch<any> = useDispatch();
    const { products, isLoading, error } = useSelector(
        (state: any) => state.products
    );
    useEffect(() => {
        dispatch(fetchProducts());
    }, []);
    return (
        <div>
            <table className="table-fixed">
                <thead>
                    <tr>
                        <th className="w-1/2 px-4 py-2">Name</th>
                        <th className="w-1/4 px-4 py-2">Price</th>
                        <th className="w-1/4 px-4 py-2">Quantity</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map((item: any) => {
                        return (
                            <tr>
                                <td className="border px-4 py-2" key={item.id}>
                                    {item.name}
                                </td>
                                <td className="border px-4 py-2">
                                    {item.price}
                                </td>
                                <input type="number"/>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    );
};

export default Cart;
