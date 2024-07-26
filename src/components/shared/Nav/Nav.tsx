import Image from "next/image"
import styles from './Nav.module.sass'


export const Nav = () => {
    return (
        <>              
            <nav className={` ${styles.nav} flex flex-row items-center justify-between decoration-slate-800 `}>
                <p>Logo</p>
                <ul>
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