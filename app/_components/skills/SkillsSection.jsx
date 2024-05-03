import Link from 'next/link';
import { BiLogoTailwindCss, BiLogoTypescript, BiLogoJavascript } from "react-icons/bi";
import { DiPhotoshop } from "react-icons/di";
import { IoLogoCss3, IoLogoReact, IoLogoGithub, IoLogoHtml5, IoLogoNodejs } from "react-icons/io5";
import styles from './skills.module.css';
import { TbBrandMongodb, TbBrandFramerMotion, TbBrandThreejs } from "react-icons/tb";
import { FaArrowAltCircleRight } from "react-icons/fa";

const SkillsSection = () => {
    return (
        <section className={styles.skills}>
            <div className={`container ${styles.skillsWrapper}`}>
                <div><h1 className={styles.heading}>My Skills</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse magnam ab deleniti voluptate perspiciatis cumque dolorem blanditiis tempora enim consequuntur molestias in impedit maiores, facere soluta, exercitationem unde minima quam.</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse magnam ab deleniti voluptate perspiciatis cumque dolorem blanditiis tempora enim consequuntur molestias in impedit maiores, facere soluta, exercitationem unde minima quam.</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse magnam ab deleniti voluptate perspiciatis cumque dolorem blanditiis tempora enim consequuntur molestias in impedit maiores, facere soluta, exercitationem unde minima quam.</p>


                    <Link href="/" className={styles.readMore}>
                        Read more <FaArrowAltCircleRight />
                    </Link>

                </div>
                <div className={styles.right}>
                    <Link href="/skills" className={`${styles.skill}`}>
                        <span className={styles.icon}><IoLogoReact /></span>

                    </Link>
                    <Link href="/skills" className={`${styles.skill}`}>
                        <span className={styles.icon}><DiPhotoshop /></span>

                    </Link>
                    <Link href="/skills" className={`${styles.skill}`}>
                        <span className={styles.icon}><IoLogoCss3 /></span>

                    </Link>
                    <Link href="/skills" className={`${styles.skill}`}>
                        <span className={styles.icon}><BiLogoTailwindCss /></span>

                    </Link>
                    <Link href="/skills" className={`${styles.skill}`}>
                        <span className={styles.icon}><IoLogoGithub /></span>

                    </Link>
                    <Link href="/skills" className={`${styles.skill}`}>
                        <span className={styles.icon}><IoLogoHtml5 /></span>

                    </Link>
                    <Link href="/skills" className={`${styles.skill}`}>
                        <span className={styles.icon}><BiLogoTypescript /></span>

                    </Link>
                    <Link href="/skills" className={`${styles.skill}`}>
                        <span className={styles.icon}><IoLogoNodejs /></span>

                    </Link>
                    <Link href="/skills" className={`${styles.skill}`}>
                        <span className={styles.icon}><BiLogoJavascript /></span>

                    </Link>
                    <Link href="/skills" className={`${styles.skill}`}>
                        <span className={styles.icon}><TbBrandFramerMotion /></span>

                    </Link>
                    <Link href="/skills" className={`${styles.skill}`}>
                        <span className={styles.icon}><TbBrandMongodb /></span>

                    </Link>
                    <Link href="/skills" className={`${styles.skill}`}>
                        <span className={styles.icon}><TbBrandThreejs /></span>

                    </Link>
                </div>

            </div>
        </section>
    )
}

export default SkillsSection