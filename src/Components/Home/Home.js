import React from 'react'
import './Home.scss'
import flash1 from '../../Assets/home-flash/1.jpg'
import flash2 from '../../Assets/home-flash/2.jpg'
import flash3 from '../../Assets/home-flash/3.jpg'
import flash4 from '../../Assets/home-flash/4.jpg'
import flash5 from '../../Assets/home-flash/5.jpg'
import flash6 from '../../Assets/home-flash/6.jpg'
import flash7 from '../../Assets/home-flash/7.jpg'
import flash8 from '../../Assets/home-flash/8.jpg'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import HomeProducts from '../Products/HomeProducts/HomeProducts'

const Home = () => {
    return (
        <main className='home'>
            <div className="home__flash">
                <Swiper
                    modules={[Navigation]}
                    spaceBetween={0}
                    slidesPerView={1}
                    navigation
                >
                    <SwiperSlide>
                        <div className="home__flash__single">
                            <img src={flash1} alt="" width='100%' />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="home__flash__single">
                            <img src={flash2} alt="" width='100%' />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="home__flash__single">
                            <img src={flash3} alt="" width='100%' />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="home__flash__single">
                            <img src={flash4} alt="" width='100%' />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="home__flash__single">
                            <img src={flash5} alt="" width='100%' />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="home__flash__single">
                            <img src={flash6} alt="" width='100%' />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="home__flash__single">
                            <img src={flash7} alt="" width='100%' />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="home__flash__single">
                            <img src={flash8} alt="" width='100%' />
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
            <HomeProducts/>
        </main>
    )
}

export default Home