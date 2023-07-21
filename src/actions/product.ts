import { instance } from "@/axios/config";
import { pause } from "@/utils/pause";

export const fetchProducts = () => async (dispatch: any) => {
    dispatch({ type: "product/fetching" }) // isloading true
    try {
        await pause(1000);
        const data = await instance.get(`/products`);
        dispatch({ type: "product/fetchingSuccess", payload: data });
    } catch (error: any) {
        dispatch({ type: "product/fetchingFailed", payload: error.message })
    } finally {
        dispatch({ type: "product/fetchingFinally" })
    }
};