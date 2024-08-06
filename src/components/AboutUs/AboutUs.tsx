import Button from 'react-bootstrap/Button';
import { Abril_Fatface } from 'next/font/google'
import styles from './AboutUs.module.sass'

const abrilFatface = Abril_Fatface ({
  weight: ['400'],
  subsets: ['latin']
})


export const AboutUs = () => {
      return (
            <div className={` ${styles['container-main']} flex flex-col mt-10 justify-center items-center text-center px-5 md:gap-11 mb-8 md:mb-16` }  id='about-us'>
                  <div className='mb-14 flex flex-col md:flex md:flex-row mt-9 gap-4'>
                        <h1 className={`${styles['title-section']} text-center uppercase text-5xl   font-semibold md:text-5xl`}>Sobre nosotros</h1>
                        <Button variant="dark" className='self-center w-44 md:w-48 md:h-11  uppercase' >contactanos</Button>{' '}
                  </div>
                  <div className='flex flex-col md:flex-row md:gap-5 ' > 
                        <h2 className={`${abrilFatface.className} self-center  text-2xl mb-2 md:w-1/4 md:text-2xl md:self-start`}>Nuestra historia</h2>  
                        <p className={` ${styles['p-afer']} relative mb-6 font-light md:w-3/4 md:p-6 md:text-center md:self-start md:py-0 md:px-20`}>Desde nuestros inicios, hemos creído en el poder del diseño para transformar espacios y vidas. Fundada en 2010, nuestra empresa nació del deseo de ofrecer muebles que combinan funcionalidad y estética. Comenzamos como un pequeño taller artesanal y, con el tiempo, hemos crecido hasta convertirnos en una marca reconocida por nuestra dedicación a la calidad y el diseño innovador. Cada pieza que ofrecemos es el resultado de una meticulosa atención al detalle y un profundo respeto por los materiales.</p>    
                  </div>         
                  <div className='flex flex-col md:flex-row md:gap-5 '>
                         <h2 className={`${abrilFatface.className} self-center font-extralight text-2xl mb-2 md:w-1/4 md:text-2xl md:self-start`}>Mision</h2> 
                         <p className={` ${styles['p-afer']} relative mb-6 font-light md:w-3/4 md:p-6 md:text-center md:self-start md:py-0 md:px-20`}>Nuestra misión es proporcionar muebles de alta calidad que inspiren y mejoren los espacios de nuestros clientes. Creemos en el diseño accesible y en la creación de productos que sean tanto funcionales como bellos. Nos esforzamos por ofrecer una experiencia de compra excepcional, desde el primer contacto hasta la entrega final, asegurando que cada cliente encuentre el mueble perfecto para su hogar u oficina.</p>
                  </div>
                
                  
            </div>
      );
}


