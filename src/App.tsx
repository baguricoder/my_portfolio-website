import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCards, Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-cards';
import 'swiper/css/pagination';
import Profile from './components/Profile';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Education from './components/Education';
import Certifications from './components/Certifications';
import Internships from './components/Internships';
import Hobbies from './components/Hobbies';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 via-purple-100 to-pink-100">
      <Swiper
        effect="cards"
        grabCursor={true}
        modules={[EffectCards, Autoplay, Pagination]}
        className="mySwiper h-screen w-full"
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true
        }}
        pagination={{
          clickable: true,
          dynamicBullets: true
        }}
        loop={true}
      >
        <SwiperSlide><Profile /></SwiperSlide>
        <SwiperSlide><Skills /></SwiperSlide>
        <SwiperSlide><Projects /></SwiperSlide>
        <SwiperSlide><Education /></SwiperSlide>
        <SwiperSlide><Certifications /></SwiperSlide>
        <SwiperSlide><Internships /></SwiperSlide>
        <SwiperSlide><Hobbies /></SwiperSlide>
        <SwiperSlide><Contact /></SwiperSlide>
      </Swiper>
    </div>
  );
}

export default App;