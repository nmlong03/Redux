import React, { useState } from "react"
import { Button, Input } from ".."
import {AiOutlinePlusSquare, AiFillCar} from "react-icons/ai"
import { ICar } from "@/interfaces/Car"
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
type FormProps = {
    onAdd: (car: ICar) => void,
    loading?: boolean
}

const Form = ({onAdd, loading}: FormProps) => {
    const [valueInput, setValueInput] = useState<string>("");
    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if(valueInput !== ""){
            onAdd({
                id: Math.floor(Math.random() * 1000),
                name: valueInput,
                price: 0,

                
            })
            const form = e.target as HTMLFormElement;
            form.reset();
            setValueInput("");
        }
    }
    const onHandleChange = (e: React.ChangeEvent<HTMLInputElement>) =>{
        console.log(e.target.value);
        
        setValueInput(e.target.value);
    }
  return (
    <form onSubmit={onSubmit} className="border-b mb-3 p-3 flex justify-between items-center">
        <Input onChange={onHandleChange} placeholder="Car Name" prefix={<AiFillCar />} />
        {loading ? (
                <div >
                    <p className="">...</p>
                    {/* <SkeletonTheme  > */}

                    <Skeleton  className="bg-blue-500 h-[33px] w-[33px]" height={33} width={33}/>
                    {/* </SkeletonTheme> */}
                </div>

        ) : 
        (<Button type="primary" icon={<AiOutlinePlusSquare />}></Button> 
)}
    </form>
  )
}

export default Form