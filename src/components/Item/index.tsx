import { Button } from "@/components";
import { ICar } from "@/interfaces/Car";
import {MdOutlineDangerous} from "react-icons/md"
type ItemProps = {
  car: ICar;
  onRemove: (car: ICar) => void
}

const Item = ({car, onRemove}: ItemProps) => {
  return (
    <li className="flex justify-between items-center p-2 border-b border-red-200">
    {car.name} 
    <Button onClick={ () => onRemove(car)} type="danger" icon={<MdOutlineDangerous />} />
</li>
  )
}

export default Item