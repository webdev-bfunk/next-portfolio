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
                        <span className={styles.icon}><IoLogoReact /><h4>React</h4></span>

                    </Link>
                    <Link href="/skills" className={`${styles.skill}`}>
                        <span className={styles.icon}><DiPhotoshop /><h4>Photoshop</h4></span>

                    </Link>
                    <Link href="/skills" className={`${styles.skill}`}>
                        <span className={styles.icon}><IoLogoCss3 /><h4>CSS</h4></span>

                    </Link>
                    <Link href="/skills" className={`${styles.skill}`}>
                        <span className={styles.icon}><BiLogoTailwindCss /><h4>TailwindCSS</h4></span>

                    </Link>
                    <Link href="/skills" className={`${styles.skill}`}>
                        <span className={styles.icon}><IoLogoGithub /><h4>Github</h4></span>

                    </Link>
                    <Link href="/skills" className={`${styles.skill}`}>
                        <span className={styles.icon}><IoLogoHtml5 /><h4>HTML5</h4></span>

                    </Link>
                    <Link href="/skills" className={`${styles.skill}`}>
                        <span className={styles.icon}><BiLogoTypescript /><h4>Typescript</h4></span>

                    </Link>
                    <Link href="/skills" className={`${styles.skill}`}>
                        <span className={styles.icon}><IoLogoNodejs /><h4>NodeJS</h4></span>

                    </Link>
                    <Link href="/skills" className={`${styles.skill}`}>
                        <span className={styles.icon}><BiLogoJavascript /><h4>Javascript</h4></span>

                    </Link>
                    <Link href="/skills" className={`${styles.skill}`}>
                        <span className={styles.icon}><TbBrandFramerMotion /><h4>Framer Motion</h4></span>

                    </Link>
                    <Link href="/skills" className={`${styles.skill}`}>
                        <span className={styles.icon}><TbBrandMongodb /><h4>MongoDB</h4></span>

                    </Link>
                    <Link href="/skills" className={`${styles.skill}`}>
                        <span className={styles.icon}><TbBrandThreejs /><h4>ThreeJS</h4></span>

                    </Link>
                </div>

            </div>
        </section>
    )
}

export default SkillsSection