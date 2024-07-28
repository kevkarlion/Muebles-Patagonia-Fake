import Image from "next/image"
import styles from './Nav.module.sass'

import Link from "next/link"
import hamb from '/public/icons/menu-hamburger-svgrepo-com.svg'


export const Nav = () => {
    return (
        <>              
            <nav className={` ${styles.nav} sm:w-full w-full h-24  flex flex-row items-center justify-between decoration-slate-800 `}>
                <Image 
                    className="pl-4"
                    src={hamb}
                    width={45}
                    height={45}
                    alt="hamburger-menu"
                />
                    <ul className={styles.navMenu}>
                        <li><Link href="#home">Home</Link></li>
                        <li><Link href="#about">About</Link></li>
                        <li><Link href="#services">Services</Link></li>
                        <li><Link href="#contact">Contact</Link></li>
                    </ul>
            </nav>
        </>
    )
}