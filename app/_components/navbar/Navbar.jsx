"use client"

// Navbar.js
// Navbar.js
import React, { useState, useRef, useEffect } from 'react';
import styles from './navbar.module.css';
import Link from 'next/link';
import { GoMoon } from 'react-icons/go';
import { FaBars } from 'react-icons/fa';
import { AiOutlineClose } from 'react-icons/ai';
import { usePathname } from 'next/navigation';
import { useOnClickOutside } from '@/app/hooks/useOnclickOutsideHook';

const data = [
    { id: 1, link: '/', caption: 'Home' },
    { id: 2, link: '/about', caption: 'About' },
    { id: 3, link: '/services', caption: 'Services' },
    { id: 4, link: '/portfolio', caption: 'Portfolio' },
    { id: 5, link: '/contact', caption: 'Contact' },
];

const Navbar = () => {
    const [navOpen, setNavOpen] = useState(false);
    const pathname = usePathname();
    const menuRef = useRef(null);


    useEffect(() => {
        if (window.innerWidth > 600) {
            setNavOpen(true);
        }
    }, [navOpen])

    const closeNavHandler = () => {
        if (window.innerWidth <= 600) {
            setNavOpen(false);
        }
    };

    const toggleNav = () => {
        setNavOpen(!navOpen);
    };

    useOnClickOutside(menuRef, closeNavHandler);

    return (
        <nav className={styles.nav}>
            <div className={`container ${styles.navContainer}`}>
                <Link href="/" onClick={closeNavHandler} className={styles.navLogo}>RunCMDCreate</Link>
                {navOpen &&
                    <ul ref={menuRef} className={styles.navItems}>
                        {data.map(({ id, link, caption }) => <li key={id}>
                            <Link href={link} onClick={closeNavHandler} className={pathname === link ? "active" : ""}>{caption}</Link>
                        </li>)}
                    </ul>
                }
                <div className={styles.navBtns}>
                    <button className={styles.themeBtn}>
                        <GoMoon />
                    </button>
                    <button className={styles.navBtn} onClick={toggleNav}>
                        {navOpen ? <AiOutlineClose /> : <FaBars />}
                    </button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
