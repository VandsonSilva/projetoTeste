import React from 'react'
import {Swiper, SwiperSlide} from 'swiper/react'

import styles from './Slide.module.css'

const Slide = () => {
    const data = [
        {id: '1', image: 'https://e0.pxfuel.com/wallpapers/606/84/desktop-wallpaper-ecommerce-website-design-company-noida-e-commerce-banner-design-e-commerce.jpg'},
        {id: '2', image: 'https://hyperia.com.br/wp-content/uploads/2017/02/ecommerceimage.jpg'},
        {id: '3', image: 'https://www.iset.com.br/blog/wp-content/uploads/2022/08/image3.png'},
    ]

  return (
    <Swiper
        slidesPerView={1}
        pagination={{clickable:true}}
        navigation
        > 
        {data.map((item) => (
            <SwiperSlide key={item.id}>
                <img
                src={item.image}
                alt='slide'
                className={styles.slide}
                />
            </SwiperSlide>
        ))}
    </Swiper>
  )
}

export default Slide