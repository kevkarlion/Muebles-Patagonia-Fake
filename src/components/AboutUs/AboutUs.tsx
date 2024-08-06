import { Abril_Fatface } from 'next/font/google'
import styles from './AboutUs.module.sass'

const abrilFatface = Abril_Fatface ({
  weight: ['400'],
  subsets: ['latin']
})


export const AboutUs = () => {
      return (
            <div className='flex flex-col justify-center items-center text-center py-20 ' id='about-us'>
                  <h1 className={`${styles['title-section']} uppercase text-4xl mb-8 mt-6`}>Conocenos</h1>
                  <div className='flex flex-col' >
                        <h2 className={`${abrilFatface.className} font-extralight text-xl mb-2`}>Nuestra historia</h2>  
                        <p className='mb-6'>Desde nuestros inicios, hemos creído en el poder del diseño para transformar espacios y vidas. Fundada en 2010, nuestra empresa nació del deseo de ofrecer muebles que combinan funcionalidad y estética. Comenzamos como un pequeño taller artesanal y, con el tiempo, hemos crecido hasta convertirnos en una marca reconocida por nuestra dedicación a la calidad y el diseño innovador. Cada pieza que ofrecemos es el resultado de una meticulosa atención al detalle y un profundo respeto por los materiales.</p>    
                  </div>         
                  <div>
                         <h2 className={`${abrilFatface.className} font-extralight text-xl mb-2`}>Mision</h2> 
                         <p className='mb-6'>Nuestra misión es proporcionar muebles de alta calidad que inspiren y mejoren los espacios de nuestros clientes. Creemos en el diseño accesible y en la creación de productos que sean tanto funcionales como bellos. Nos esforzamos por ofrecer una experiencia de compra excepcional, desde el primer contacto hasta la entrega final, asegurando que cada cliente encuentre el mueble perfecto para su hogar u oficina.</p>
                  </div>
                  <div>
                        <h2 className={`${abrilFatface.className} font-extralight text-xl mb-2`}>Visión</h2> 
                        <p className='mb-6'>Nuestra visión es ser líderes en el mercado de muebles de diseño e industriales, reconocidos por nuestra innovación, calidad y compromiso con la sostenibilidad. Aspiramos a expandir nuestro alcance global y seguir influenciando positivamente el diseño de interiores. Queremos ser la primera opción para aquellos que buscan muebles que no solo cumplan una función, sino que también cuenten una historia y añadan carácter a cualquier espacio.</p>
                  </div>
                  <div>
                        <h2 className={`${abrilFatface.className} font-extralight text-xl mb-2`}>Equipo</h2> 
                        <p className='mb-6'>
                        Nuestro equipo está compuesto por apasionados del diseño y la artesanía, cada uno aportando una rica experiencia y habilidades únicas. Desde nuestros diseñadores visionarios hasta nuestros artesanos expertos, todos compartimos una dedicación común: crear muebles excepcionales. Nos enorgullecemos de trabajar juntos para traer las mejores ideas y técnicas a nuestros productos, asegurando que cada pieza que llega a tu hogar sea de la más alta calidad.
                        <span>

                              María López - Directora de Diseño
                              Juan Pérez - Maestro Artesano
                              Laura González - Gerente de Ventas
                              Carlos Ramírez - Especialista en Logística
                              Ana Fernández - Coordinadora de Atención al Cliente
                              <span>
                              Nuestro equipo está aquí para ayudarte a encontrar el mueble perfecto y hacer de tu experiencia de compra algo memorable. Nos encanta lo que hacemos, y estamos comprometidos a compartir esa pasión contigo.
                              </span>
                        </span>
                        </p>
                  </div>
            </div>
      );
}


