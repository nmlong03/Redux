import { Item } from "@/components";
import { ICar } from "@/interfaces/Car";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "../../App.css"
type ListProps = {
  cars: ICar[];
  onRemove: (car: ICar) => void;
  loading?: boolean;
};

const List = ({ cars, onRemove, loading }: ListProps) => {
  return (
    <>
      {loading ? (
        <SkeletonTheme baseColor="#FF52A2" highlightColor="#FFB07F"   duration={2}>        
        <p>
            <Skeleton className="my-2" count={3} height={40} />
          </p>
        </SkeletonTheme>
      ) : (
        <ul>
          {cars?.map((car: ICar) => (
            <Item onRemove={onRemove} key={car.id} car={car} />
          ))}
        </ul>
      )}
    </>
  );
};

export default List;
