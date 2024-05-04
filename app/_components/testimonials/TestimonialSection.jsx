"use client"
import React from 'react'
import styles from './testimonial.module.css'
import { Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'
import { Swiper, SwiperSlide } from 'swiper/react';
import Image from 'next/image'
import { data } from './testimonialsData'



const TestimonialsSection = () => {
    return (
        <section className={styles.testimonials}>
            <h1>Testimonials</h1>
            <p>Check out what my past clients have to say</p>
            <Swiper
                modules={[Pagination]}
                spaceBetween={50}
                slidesPerView={1}
                pagination={{ clickable: true }}
            >
                {data.map(({ id, name, avatar, profession, quote }) =>
                    <SwiperSlide key={id} className={styles.slide}>
                        <div className={styles.avatarWrapper}>
                            <div className={styles.avatar}>
                                <Image src={avatar} alt="Profile Picture" />
                            </div>

                        </div>
                        <h6 className={styles.name}>{name}</h6>
                        <p className={styles.profession}>{profession}</p>
                        <p className={styles.quote}>{quote}</p>

                    </SwiperSlide>)}
            </Swiper>
            <div className={styles.swiperPagination}></div>
        </section>
    )
}

export default TestimonialsSection
