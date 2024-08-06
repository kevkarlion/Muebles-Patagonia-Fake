import { Abril_Fatface } from 'next/font/google'
import styles from './AboutUs.module.sass'

const abrilFatface = Abril_Fatface ({
  weight: ['400'],
  subsets: ['latin']
})


export const AboutUs = () => {
      return (
            <div className={` ${styles['container-main']} flex flex-col justify-center items-center text-center  px-4`} id='about-us'>
                  <h1 className={`${styles['title-section']} uppercase text-4xl mb-8 mt-6 `}>Conocenos</h1>
                  <div className='flex flex-col ' > 
                        <h2 className={`${abrilFatface.className} w-auto self-center font-extralight text-xl mb-2 `}>Nuestra historia</h2>  
                        <p className='mb-6 font-light'>Desde nuestros inicios, hemos creído en el poder del diseño para transformar espacios y vidas. Fundada en 2010, nuestra empresa nació del deseo de ofrecer muebles que combinan funcionalidad y estética. Comenzamos como un pequeño taller artesanal y, con el tiempo, hemos crecido hasta convertirnos en una marca reconocida por nuestra dedicación a la calidad y el diseño innovador. Cada pieza que ofrecemos es el resultado de una meticulosa atención al detalle y un profundo respeto por los materiales.</p>    
                  </div>         
                  <div className='mt-4'>
                         <h2 className={`${abrilFatface.className} font-extralight text-xl mb-2`}>Mision</h2> 
                         <p className='mb-6 font-light'>Nuestra misión es proporcionar muebles de alta calidad que inspiren y mejoren los espacios de nuestros clientes. Creemos en el diseño accesible y en la creación de productos que sean tanto funcionales como bellos. Nos esforzamos por ofrecer una experiencia de compra excepcional, desde el primer contacto hasta la entrega final, asegurando que cada cliente encuentre el mueble perfecto para su hogar u oficina.</p>
                  </div>
                
                  
            </div>
      );
}


