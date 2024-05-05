import React from 'react'
import styles from './faq.module.css'
import { data } from './faqData'
import FaqItem from './FaqItem'

const FaqSection = () => {
    return (
        <section className={styles.section}>
            <h2>Frequently Asked Questions</h2>
            <p>Find an answer to some of the frequently asked questions below. Contact me if you have more questions.</p>
            <div className={`container ${styles.container}`}> {data.map(({ id, title, description }) => <FaqItem key={id} title={title} description={description} />)}</div>
        </section>
    )
}

export default FaqSection

