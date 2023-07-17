import { useEffect, useState } from 'react'
import { ICar } from './interfaces/Car'
import { Button, Form, Input, Item, List } from './components';
import Table from './components/Table';
import { instance } from './axios/config';
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import 'react-loading-skeleton/dist/skeleton.css'
import { pause } from './utils/pause';
import "./App.css";
import Counter from './components/Counter';
import ProductList from './components/ProductList';

function App() {
  const carsConfigData = [
    {
      lable: "Name",
      key: "name",
      render: (item: any) => <span className='uppercase text-red-500 text-center'>{item.name}</span>,
      header: (item: any) => <span className='text-green-500'>{item.lable}</span>
    },
    {
      lable: "Price",
      key: "price",
      render: (item: any) => <span>{item.price}</span>
    }
  ]
  const [cars, setCars] = useState<ICar[]>([]);
  const [isLoading,setIsLoading] = useState<boolean>(false);
  const [isLoadingAdd,setIsLoadingAdd] = useState<boolean>(false);
  const [error, serError] = useState<null>(null)
  const addCar = async (car: ICar) => {
    setIsLoadingAdd(true)
    try {
      await pause(1000)
      setCars([...cars, car])
      setIsLoadingAdd(true)
    } catch (error) {
      console.log(error);
      setIsLoadingAdd(false)
      
    }
  };
  const removeCar = (car: ICar) => {
    setCars(cars.filter((item) => item.id !== car.id));  }
  // const update = (car: ICar) => {};
  // const fetchCar = () => {};
  useEffect(() => {
    (async() => {
      setIsLoading(true)
      try {
        await pause(1000);
        setCars(await instance.get('/cars'))
        setIsLoading(false)        
      } catch (error: any) {
        serError(error.message)
      setIsLoading(false)
      }
    })()
  }, [])
  return (
    <div>
      {/* <div className='w-96 mx-auto border'> 
        <Form  onAdd={addCar} loading={isLoadingAdd}/>
        <List  cars={cars} onRemove={removeCar} loading={isLoading}/>
        <hr />
        <h2>Table components</h2>
        <Table data={carData} config={carsConfigData} />
      </div> */}
      <Counter />
      <ProductList />
    </div>
  )
}

export default App
