import Link from 'next/link'
import styles from './header.module.css'
import Image1 from '../../assets/topleft1.png'
import Image2 from '../../assets/topright1.png'
import Image3 from '../../assets/bottomleft1.png'
import Image4 from '../../assets/bottomright1.png'
import React from 'react'
import Image from 'next/image'

// https://www.youtube.com/watch?v=lHBFIFrj800&ab_channel=EGATOR 1hr 8mins

const Header = () => {
    return (
        <header className={`container ${styles.header}`}>
            <div className={styles.headerLeft}>
                <h1>Get your business online the right way!</h1>
                <p>At RunCmdCreate, every command is a brushstroke, and every keystroke is an opportunity to build something extraordinary. Join us on this journey where technology meets artistry, and lets bring your digital vision to life, one command at a time.</p>
                <div className={styles.headersCta}>
                    <Link href="/portfolio" className='btn'>Projects</Link>
                    <Link href="/contact" className='btn primary'>Hire me</Link>
                </div>
            </div>
            <div className={styles.headerRight}>
                <div className={styles.card1}>
                    <Image src={Image1} alt='profile picture' />
                </div>
                <div className={styles.card2}>
                    <Image src={Image2} alt='profile picture' />
                </div>
                <div className={styles.card3}>
                    <Image src={Image3} alt='profile picture' />
                </div>
                <div className={styles.card4}>
                    <Image src={Image4} alt='profile picture' />
                </div>
            </div>
        </header>
    )
}

export default Header