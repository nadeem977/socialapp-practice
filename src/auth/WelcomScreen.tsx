import React, { useRef, useEffect } from 'react';
import { Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'tailwindcss/tailwind.css';
import welmimg from "../assets/welm.png"



const WelcomeScreen: React.FC = () => {
  const prevRef = useRef<HTMLButtonElement | null>(null);
  const nextRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    if (prevRef.current && nextRef.current) {
      const swiperInstance = document.querySelector('.swiper')?.swiper;
      swiperInstance.params.navigation.prevEl = prevRef.current;
      swiperInstance.params.navigation.nextEl = nextRef.current;
      swiperInstance.navigation.init();
      swiperInstance.navigation.update();
    }
  }, []);

  return (
    <div className='min-h-screen h-full w-full bg-[#F8F8F8] relative p-10 '>
      <Swiper
        navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current,}}
        pagination={{ clickable: true }}
        allowTouchMove={false}
        simulateTouch={false}
        keyboard={{ enabled: false }}
        mousewheel={{ forceToAxis: false }}
        modules={[Navigation, Pagination]}
        className="mySwiper rounded-[20px] wlmscrshdo">
        {[1, 2, 3, 4, 5].map((_, i) => (
          <SwiperSlide key={i} className='setheitslidr mt-auto bg-white w-full flex items-center justify-center'>
            Slide {i + 1}
          </SwiperSlide>
        ))}

        <div className='border-t-[2px] border-gray-300 h-[92px] bg-white'>
          <button ref={prevRef} className="custom-prev-button absolute bottom-5 left-5 hover:bg-green border-[1.5px] border-green text-green hover:text-white w-[150px] py-2 z-20 rounded-full">
            Back
          </button>
          <button ref={nextRef} className="custom-next-button absolute bottom-5 right-5 border-[1.5px] border-green text-green hover:bg-green hover:text-white w-[150px] py-2 z-20 rounded-full">
            Continue
          </button>
        </div>
      </Swiper>
    </div>
  );
}

export default WelcomeScreen;
