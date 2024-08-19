
//Aplico interface para manejo de ts
interface CategoryProps {
      params: {
            categories: string[],
            searchParams?: string[]
      }
}

const Category = (props: CategoryProps) => {

      console.log(props);
      
      //destructuracion
      const { categories } = props.params
      
      
      return (
            <div>
                  <h1 className="mt-40">categoria dinamica: {categories}</h1>
            </div>
      );
}

export default Category;
