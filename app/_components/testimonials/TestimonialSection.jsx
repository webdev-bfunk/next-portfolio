"use client"
import React from 'react'
import styles from './testimonial.module.css'
import { Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'
import { Swiper, SwiperSlide } from 'swiper/react';

const TestimonialsSection = () => {
    return (
        <section className={styles.testimonials}>
            <div className={`container ${styles.testimonialsWrapper}`}>
                <h1>Testimonials</h1>
                <p>Check out what my past clients have to say</p>
                <Swiper
                    modules={[Pagination]}
                    spaceBetween={50}
                    slidesPerView={1}
                    pagination={{ clickable: true }}
                >
                    <SwiperSlide>Slide 1</SwiperSlide>
                </Swiper>
                <div className={styles.swiperPagination}></div>
            </div>
        </section>
    )
}

export default TestimonialsSection