import Link from 'next/link';
import { BiLogoTailwindCss, BiLogoTypescript, BiLogoJavascript, BiDownload } from "react-icons/bi";
import { DiPhotoshop } from "react-icons/di";
import { IoLogoCss3, IoLogoReact, IoLogoGithub, IoLogoHtml5, IoLogoNodejs } from "react-icons/io5";
import styles from './skills.module.css';
import { TbBrandMongodb, TbBrandFramerMotion, TbBrandThreejs } from "react-icons/tb";
import { FaArrowAltCircleRight } from "react-icons/fa";

const SkillsSection = () => {
    return (
        <section className={styles.skills}>
            <div className={`container ${styles.skillsWrapper}`}>
                <div>
                    <h1 className={styles.heading}>My Skills</h1>
                    <p className={styles.paragraph}>Within the vibrant canvas of my portfolio, my journey is defined by a relentless pursuit of knowledge and a fervent commitment to self-improvement. As a self-taught individual, I am driven by an insatiable thirst for learning, constantly seeking out new challenges and opportunities to expand my horizons. Whether delving into complex concepts or mastering intricate skills, I approach each endeavor with unwavering determination and an open mind, propelled by an innate curiosity to uncover the unknown.</p>

                    <p className={styles.paragraph}>My adeptness as a fast learner and an independent problem solver has been honed through years of navigating diverse landscapes, both in the digital realm and beyond. With a background steeped in the arts and photography, I bring a unique perspective to every task, infusing creativity and innovation into my approach. Drawing from this rich tapestry of experiences, I am adept at finding answers and devising solutions autonomously, sparing no effort in the pursuit of excellence.</p>

                    <p className={styles.paragraph}>At the heart of my methodology lies a deep-seated passion for continuous improvement and growth. Armed with nimble fingers and an affinity for keyboard shortcuts, I navigate the digital landscape with finesse, executing tasks with precision and efficiency. Yet, beyond the allure of speed lies a profound appreciation for the process itself. I am not merely driven by the destination, but by the journey—the exhilarating pursuit of mastery that unfolds through hands-on experience and the unwavering commitment to learning by doing.</p>


                    <div className={styles.links}>

                        <Link href="/" className={styles.readMore}>
                            Download my resume <BiDownload />
                        </Link>
                        <Link href="/" className={styles.readMore}>
                            Read more <FaArrowAltCircleRight />
                        </Link>
                    </div>
                </div>
                <div className={styles.right}>
                    <Link href="/skills" className={`${styles.skill}`}>
                        <span className={styles.icon}><IoLogoReact /><h4 className={styles.h4grayed}>React</h4></span>

                    </Link>
                    <Link href="/skills" className={`${styles.skill}`}>
                        <span className={styles.icon}><DiPhotoshop /><h4 className={styles.h4grayed}>Photoshop</h4></span>

                    </Link>
                    <Link href="/skills" className={`${styles.skill}`}>
                        <span className={styles.icon}><IoLogoCss3 /><h4 className={styles.h4grayed}>CSS</h4></span>

                    </Link>
                    <Link href="/skills" className={`${styles.skill}`}>
                        <span className={styles.icon}><BiLogoTailwindCss /><h4 className={styles.h4grayed}>TailwindCSS</h4></span>

                    </Link>
                    <Link href="/skills" className={`${styles.skill}`}>
                        <span className={styles.icon}><IoLogoGithub /><h4 className={styles.h4grayed}>Github</h4></span>

                    </Link>
                    <Link href="/skills" className={`${styles.skill}`}>
                        <span className={styles.icon}><IoLogoHtml5 /><h4 className={styles.h4grayed}>HTML5</h4></span>

                    </Link>
                    <Link href="/skills" className={`${styles.skill}`}>
                        <span className={styles.icon}><BiLogoTypescript /><h4 className={styles.h4grayed}>Typescript</h4></span>

                    </Link>
                    <Link href="/skills" className={`${styles.skill}`}>
                        <span className={styles.icon}><IoLogoNodejs /><h4 className={styles.h4grayed}>NodeJS</h4></span>

                    </Link>
                    <Link href="/skills" className={`${styles.skill}`}>
                        <span className={styles.icon}><BiLogoJavascript /><h4 className={styles.h4grayed}>Javascript</h4></span>

                    </Link>
                    <Link href="/skills" className={`${styles.skill}`}>
                        <span className={styles.icon}><TbBrandFramerMotion /><h4 className={styles.h4grayed}>Framer Motion</h4></span>

                    </Link>
                    <Link href="/skills" className={`${styles.skill}`}>
                        <span className={styles.icon}><TbBrandMongodb /><h4 className={styles.h4grayed}>MongoDB</h4></span>

                    </Link>
                    <Link href="/skills" className={`${styles.skill}`}>
                        <span className={styles.icon}><TbBrandThreejs /><h4 className={styles.h4grayed}>ThreeJS</h4></span>

                    </Link>
                </div>

            </div>
        </section>
    )
}

export default SkillsSection