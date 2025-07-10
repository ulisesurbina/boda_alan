import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

import '../App.css'

import history1 from '../assets/historia_1.jpeg'
import history2 from '../assets/historia_2.jpeg'
import history3 from '../assets/historia_3.jpeg'
import history4 from '../assets/historia_4.jpeg'
import history5 from '../assets/historia_5.jpeg'
import history6 from '../assets/historia_6.jpeg'
import history7 from '../assets/historia_7.jpeg'
import history8 from '../assets/historia_8.jpeg'
import history9 from '../assets/historia_9.jpeg'
import history10 from '../assets/historia_10.jpeg'
import history11 from '../assets/historia_11.jpeg'
import history12 from '../assets/historia_12.jpeg'


import { EffectCoverflow, Autoplay } from 'swiper/modules';

export default function App() {
  return (
    <>
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        slidesPerView={5}
        breakpoints={{
          0: {
            slidesPerView: 1,
          },
          400: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 3,
          },
          1024: {
            slidesPerView: 5,
          },
        }}
        spaceBetween={50}
        loop={true}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        coverflowEffect={{
          rotate: 20,
          stretch: 0,
          depth: 50,
          modifier: 1,
          slideShadows: false,
        }}
        modules={[EffectCoverflow, Autoplay]}
        className="mySwiperCircular"
      >
        <SwiperSlide>
          <img src={history1} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={history2} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={history3} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={history4} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={history5} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={history6} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={history7} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={history8} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={history9} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={history10} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={history11} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={history12} />
        </SwiperSlide>
      </Swiper>
    </>
  );
}