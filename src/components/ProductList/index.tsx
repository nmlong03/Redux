import { instance } from "@/axios/config";
import { ProductContext } from "../../context/ProductContext";
import React, { Dispatch, useContext, useEffect } from "react";
import Skeleton from "react-loading-skeleton";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "..";
import { fetchProducts } from "@/actions/product";

const ProductList = () => {
  const dispatch: Dispatch<any> = useDispatch();
  const { products, isLoading, error } = useSelector((state: any) => state.products);
  console.log(products);
  
  useEffect(() => {
    dispatch(fetchProducts());
}, []);

  if (isLoading) return <Skeleton count={3} height={35} />;
  if (error) return <div>{error}</div>;
  return (
    <div>
      {products?.map((item: any) => {
                return (
                  <div key={item.id}>
                      {item.name}
                      <Button
                          type="primary"
                          onClick={() =>
                              dispatch({ type: "cart/add", payload: { ...item, quantity: 1 } })
                          }
                      >
                          Add to cart
                      </Button>
                  </div>
              );
      })}

    </div>
  );
};

export default ProductList;
