'use client'
import { CategoryList } from "@/components/home/CategoryList";
import { Ofertas } from "@/components/home/Ofertas";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import  Loading  from '../../catalogo/loading'
//interface para saber que objeto va a llegar
interface CategoryProps {
  params: {
    categories: string[]
  };
}

export default function Category(props: CategoryProps) {
  const path = usePathname()
  const [currentUrl, setCurrentUrl] = useState('')
  const [stateMainIsReady, setStateIsReady] = useState(false)
 

  useEffect(() => { 
    setCurrentUrl(path)
    setStateIsReady(true)
  }, [path])

  if(!stateMainIsReady) return <Loading />

  
  return (
    <>
      <div className="w-full">
        {currentUrl === "/catalogo"  && <CategoryList />}
        {currentUrl === "/catalogo/ofertas" && <Ofertas />}
      </div>
    </>
  );
}
