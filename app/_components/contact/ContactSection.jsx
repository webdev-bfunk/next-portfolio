import React from 'react'
import styles from './contact.module.css';

const ContactSection = () => {
    return (
        <div className={styles.section}>
            <div className={`container ${styles.contactWrapper}`}>
                <h2>Contact Me</h2>
                <p>Reach out to me about job opportunities, help with a project, or just to say hi!</p>
            </div>
        </div>
    )
}

export default ContactSection