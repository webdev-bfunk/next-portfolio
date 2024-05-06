import React from 'react'
import styles from './contact.module.css';
import Image from 'next/image';
import robot from '../../assets/rccrobot.png'
const ContactSection = () => {
    return (
        <div className={styles.section}>
            <div className={`container ${styles.contactWrapper}`}>
                <h2>Contact Me</h2>
                <p className={styles.tagline}>Reach out to me about job opportunities, help with a project, or just to say hi!</p>
                <div className={styles.inputWrapper}>
                    <input className={styles.inputs} type='text' placeholder='Name' />
                    <input className={styles.inputs} type='text' placeholder='Email' />
                    <textarea className={styles.inputs} placeholder='Message' />
                    <button type="submit" className={styles.sendBtn}>Send</button>

                </div>
                <Image src={robot} alt="rcc robot" className={styles.robot} />
            </div>
        </div>
    )
}

export default ContactSection