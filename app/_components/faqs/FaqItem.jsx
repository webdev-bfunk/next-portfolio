"use client"
import React, { useState } from 'react'
import styles from './faq.module.css'
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai'

const FaqItem = ({ title, description }) => {
    const [open, setOpen] = useState(false);

    return (
        <article className={`${styles.faq} ${open ? styles.open : ""}`} onClick={() => setOpen(!open)}>
            <div>
                <span>{open ? <AiOutlineMinus /> : <AiOutlinePlus />}</span>
                <h6>{title}</h6>
            </div>
            {open && <p>{description}</p>}
        </article>
    )
}

export default FaqItem