import styles from './menu.module.css'
import Image from 'next/image'

import logo from './Group 2.png'
import   sino from './Vector.svg'
export const Menu = ()=>{
    return(
        <header className={styles.menu}>
            <div>
             <Image src ={logo} alt='logo' priority/>
            </div>
            <nav className={`${styles.links} links`}>
               <ul className ={styles.links}>
               <li><a href="#"></a>Home</li>
                <li><a href="#"></a>Cardápio</li>
                <li><a href="#"></a>Pedidos</li>
                <li><a href="#"></a>Contatos</li>
               </ul>
            </nav>
            <div className={styles.icone}>
            <Image src ={sino} alt='logo' priority/>
            </div>
        </header>
    )
}