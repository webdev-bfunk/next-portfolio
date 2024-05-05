"use client"
import React from 'react'
import styles from './footer.module.css'
import Link from 'next/link'
import { usePathname } from 'next/navigation';

const data = [
    { id: 1, link: '/', caption: 'Home' },
    { id: 2, link: '/about', caption: 'About' },
    { id: 3, link: '/services', caption: 'Services' },
    { id: 4, link: '/portfolio', caption: 'Portfolio' },
    { id: 5, link: '/contact', caption: 'Contact' },
];

const Footer = () => {
    const pathname = usePathname();
    return (
        <footer styles={styles.footers}>
            <div className={`container ${styles.footerContainer}`}>
                <Link href="/" className={styles.navLogo}>RunCMDCreate</Link>

                <ul className={styles.navItems}>
                    {data.map(({ id, link, caption }) => <li key={id}>
                        <Link href={link} className={pathname === link ? "active" : ""}>{caption}</Link>
                    </li>)}
                </ul>

            </div>
        </footer>
    )
}

export default Footer