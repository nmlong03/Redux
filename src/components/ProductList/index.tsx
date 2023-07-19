import { instance } from '@/axios/config';
import { ProductContext } from '../../context/ProductContext';
import React, { useContext, useEffect } from 'react'
import Skeleton from 'react-loading-skeleton';
import { useDispatch, useSelector } from "react-redux";

const ProductList = () => {
    const dispatch = useDispatch();
    const {products, isLoading, error} = useSelector((state) => state.products)
    useEffect(() => {
        const fetchProducts = async () => {
            try {
                // call api
                const data = await instance.get(`/products`);
                // rerender
                dispatch({ type: "product/fetchProducts", payload: data });
            } catch (error: any) {
            } finally {
            }
        };
        fetchProducts();
    }, []);
    const addProduct = async (product: any) => {
        try {
            const data = await instance.post(`/products`, product);
            dispatch({ type: "product/addProduct", payload: data });
        } catch (error: any) {
        } finally {
        }
    };
    const removeProduct = async (product: any) => {
        try {
            await instance.delete(`/products/${product.id}`);
            dispatch({ type: "product/deleteProduct", payload: product.id });
        } catch (error: any) {
        } finally {
        }
    };
    const updateProduct = async (product: any) => {
        try {
            const data = await instance.put(`/products/${product.id}`, product);
            dispatch({ type: "product/updateProduct", payload: data });
        } catch (error: any) {
        } finally {
        }
    };

    if (isLoading) return <Skeleton count={3} height={35} />;
    if (error) return <div>{error}</div>;
    return (
        <div>
            {products.map((item: any) => {
                return <div key={item.id}>{item.name}</div>;
            })}
        </div>
    );
}

export default ProductList