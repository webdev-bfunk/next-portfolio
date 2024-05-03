import React from 'react'
import styles from './services.module.css'
import Link from 'next/link'
import { FaCode, FaLaptopCode, FaServer } from 'react-icons/fa'
import { MdDesignServices } from "react-icons/md";

const ServicesSection = () => {
    return (
        <section className={styles.services}>
            <div className={`container ${styles.servicesWrapper}`}>

                <Link href="/services" className={`btn ${styles.service}`}>
                    <span className={styles.icon}><MdDesignServices /></span>
                    <h6 className={styles.title}>UI/UX Design</h6>
                </Link>
                <Link href="/services" className={`btn ${styles.service}`}>
                    <span className={styles.icon}><FaCode /></span>
                    <h6 className={styles.title}>Frontend</h6>
                </Link>
                <Link href="/services" className={`btn ${styles.service}`}>
                    <span className={styles.icon}><FaServer /></span>
                    <h6 className={styles.title}>Backend</h6>
                </Link>
                <Link href="/services" className={`btn ${styles.service}`}>
                    <span className={styles.icon}><FaLaptopCode /></span>
                    <h6 className={styles.title}>Fullstack</h6>
                </Link>
            </div>
        </section>
    )
}

export default ServicesSection