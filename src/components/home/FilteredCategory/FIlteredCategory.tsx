import { furnitureItems } from "@/furnituresData"
import Image from "next/image";
import styles from './FilteredCategory.module.sass'
import Card from "react-bootstrap/Card";

interface FurnitureListProps {
  category?:  string
}


//Recibe la categoria seleccionada por el usuario
export const FilteredCategory: React.FC<FurnitureListProps> = ({ category }) => {

  // Filtra los muebles si se ha especificado una categoría
  const filteredItems = category
    ? furnitureItems.filter((item) => item.category === category)
    : furnitureItems

  

  return (
    <div >
      <h2 className={` font-abril uppercase   flex justify-center text-6xl text-center   font-bold sm:text-7xl md:!text-7xl xl:!text-7xl  mb-10 mt-28 `}>{category}</h2>
      <div className={` ${styles['container-grid']}  mb-12`}>
        {filteredItems.map((item) => (
          <div  key={item.id}>
            
            <Card className="border-none grid justify-items-center">
              <div className="w-[280px] h-[265px]  relative ">
                <Image
                  className=" object-left-bottom"
                  src={item.imageUrl}
                  fill={true}
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  alt={item.name}
                  style={{ objectFit: "cover" }}
                  loading="lazy"
                />
              </div>
              <Card.Body className="w-auto p-0 ">
                <Card.Title className="pt-2 pb-2 text-center bg-black text-white rounded-b-md">Luxura Home</Card.Title>
                <Card.Text className="font-light">
                  {item.description}
                </Card.Text>
                {/* <Button className="mt-3" variant="dark">Más info</Button> */}
              </Card.Body>
          </Card>
          </div>
          
        ))}
      </div>
    </div>
  );
};


