"use client"
import React, { useState } from 'react'
import styles from './footer.module.css'
import Link from 'next/link'
import { usePathname } from 'next/navigation';
import { FaArrowUp } from 'react-icons/fa';

const data = [
    { id: 1, link: '/', caption: 'Home' },
    { id: 2, link: '/about', caption: 'About' },
    { id: 3, link: '/services', caption: 'Services' },
    { id: 4, link: '/portfolio', caption: 'Portfolio' },
    { id: 5, link: '/contact', caption: 'Contact' },
];

const Footer = () => {
    const pathname = usePathname();
    const [navOpen, setNavOpen] = useState(false);
    const closeNavHandler = () => {

    }

    return (
        <footer styles={styles.footers}>
            <div className={`container ${styles.footerContainer}`}>
                <Link href="/" className={styles.navLogo} onClick={closeNavHandler}>RunCMDCreate</Link>
                {navOpen &&
                    <ul className={styles.navItems}>
                        {data.map(({ id, link, caption }) => <li key={id}>
                            <Link href={link} className={pathname === link ? "active" : ""}>{caption}</Link>
                        </li>)}
                    </ul>}
                <Link href="/">Back to top <FaArrowUp /></Link>
                <small className={styles.footerCopyright}>&copy; 2024 RunCMDCreate</small>
            </div>
        </footer>
    )
}

export default Footer