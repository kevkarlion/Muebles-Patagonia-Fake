import Image from "next/image"
import styles from './Nav.module.sass'


import hamb from '/public/icons/menu-hamburger-svgrepo-com.svg'


export const Nav = () => {
    return (
        <>              
            <nav className={` ${styles.nav} sm:w-full w-full h-[60px]  flex flex-row items-center justify-between decoration-slate-800 `}>
                <Image 
                    className="pl-4"
                    src={hamb}
                    width={45}
                    height={45}
                    alt="hamburger-menu"
                />
                <ul className="">
                    <li>Home</li>
                    <li>Acerca de</li>
                    <li>Servicios </li>
                    <li>Productos</li>
                    <li>Blog</li>
                    <li>Contacto</li>
                </ul>
            </nav>
        </>
    )
}