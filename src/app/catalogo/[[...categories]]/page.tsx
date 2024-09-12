'use client'
import { CategoryList } from "@/components/home/CategoryList"
import { Ofertas } from "@/components/home/Ofertas"
import { usePathname } from "next/navigation"
import { useEffect, useState } from "react"
import { FilteredCategory } from '@/components/home/FilteredCategory'
import  { Spinner } from '@/components/shared/Spinner'
import { FurnitureCategory } from '@/types'


//interface para saber que objeto va a llegar
interface CategoryProps {
  category?: FurnitureCategory
}

export default function Category() {
 

  const path = usePathname()

  //divide la url en un array, separando las posiciones por el slash /
  const ruta: string[] = path.split('/')
  
  
 

  //Agrego las rutas necesarias
  // objeto categoryComponents es un diccionario en el que las claves son de tipo string y los valores son componentes JSX (JSX.Element.
  const categoryComponentes:{[key: string]: JSX.Element} = {
    'ofertas': <Ofertas />
  }


  //ruta es de tipo FurnitureCategory
  //rutaCategory es indirectamente de este tipo tambien
  const rutaCategory = ruta[2] as FurnitureCategory

  
  const [currentUrl, setCurrentUrl] = useState('')
  const [stateMainIsReady, setStateIsReady] = useState(false)


  useEffect(() => { 
    setCurrentUrl(path)
    setStateIsReady(true)
  }, [path])
  

      
  if(!stateMainIsReady) return <Spinner />

  
  return (
    <>
      <div >

        {currentUrl === "/catalogo"  && <CategoryList />}

        {/* Si existe una categoría específica, renderiza el componente correspondiente */}
        {rutaCategory && categoryComponentes[rutaCategory]}

        {/* Si la categoría no está en el mapeo, muestra el componente FilteredCategory */}
        {rutaCategory && !categoryComponentes[rutaCategory] && (<FilteredCategory category={rutaCategory} />)}
        
      </div>
    </>
  );
}
