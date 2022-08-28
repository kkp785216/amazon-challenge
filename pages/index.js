import Head from 'next/head'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';
import HomeProduct1 from '../Components/Products/HomeProducts/HomeProduct1'

const HomeFlash = (props) => {
    const { imgUrl } = props;
    return (
        <div className="home__flash__single">
            <img src={imgUrl} alt="Logo" width='100%' />
        </div>
    )
}

export default function Home() {
    return (
        <>
            <Head>
                <title>Amazon Challenge - Home</title>
                <meta name="description" content="Amazon Shoping App" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className='home'>
                <div className="home__flash">
                    <Swiper
                        modules={[Navigation, Autoplay]}
                        spaceBetween={0}
                        slidesPerView={1}
                        navigation
                        autoplay={{delay: 10000, disableOnInteraction: false, pauseOnMouseEnter: true}}
                        loop={true}
                    >
                        <SwiperSlide>
                            <HomeFlash imgUrl='/assets/home-flash/1.jpg' />
                        </SwiperSlide>
                        <SwiperSlide>
                            <HomeFlash imgUrl='/assets/home-flash/2.jpg' />
                        </SwiperSlide>
                        <SwiperSlide>
                            <HomeFlash imgUrl='/assets/home-flash/3.jpg' />
                        </SwiperSlide>
                        <SwiperSlide>
                            <HomeFlash imgUrl='/assets/home-flash/4.jpg' />
                        </SwiperSlide>
                        <SwiperSlide>
                            <HomeFlash imgUrl='/assets/home-flash/5.jpg' />
                        </SwiperSlide>
                        <SwiperSlide>
                            <HomeFlash imgUrl='/assets/home-flash/6.jpg' />
                        </SwiperSlide>
                        <SwiperSlide>
                            <HomeFlash imgUrl='/assets/home-flash/7.jpg' />
                        </SwiperSlide>
                        <SwiperSlide>
                            <HomeFlash imgUrl='/assets/home-flash/8.jpg' />
                        </SwiperSlide>
                    </Swiper>
                </div>
                <HomeProduct1 />
            </main>
        </>
    )
}
