
//Aplico interface para manejo de ts
interface CategoryProps {
      params: {
            category: string
      }
}

const Category = (props: CategoryProps) => {


      //destructuracion
      const { category } = props.params

      console.log(category);
      
      return (
            <div>
                  <h1 className="mt-40">categoria dinamica</h1>
            </div>
      );
}

export default Category;
