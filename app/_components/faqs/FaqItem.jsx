"use client"
import React, { useState } from 'react'
import styles from './faq.module.css'
import { AiOutlinePlus } from 'react-icons/ai'

const FaqItem = ({ title, description }) => {
    const [open, setOpen] = useState(false);

    return (
        <article className={`${styles.faq}`} onClick={() => setOpen()}>
            <div>
                <span><AiOutlinePlus /></span>
                <h6>{title}</h6>
            </div>
            <p>{description}</p>
        </article>
    )
}

export default FaqItem