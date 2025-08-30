import React, { useRef, useState, useEffect } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Scrollbar, EffectFade } from 'swiper/modules'
import { BASE_CIRCLE_DIAMETER, BASE_WIDTH } from '../../variables'
import CustomPagination  from './components/Pagination'
import MainNavigation from './components/Navigation/main'
import SlideContent from './components/SlideContent'

import 'swiper/scss'
import 'swiper/scss/navigation'
import 'swiper/scss/pagination'
import 'swiper/scss/scrollbar'
import "swiper/css/effect-fade"

import gsap from 'gsap'

interface EventData {
  year: number
  description: string
}

interface SlideData {
  startDate: number
  endDate: number
  events: EventData[]
  category: string
}

interface SliderProps {
  slides: SlideData[]
}

const Slider: React.FC<SliderProps> = ({ slides }) => {
  const limitedSlides = slides.slice(0, 6)
  const swiperRef = useRef<any>(null)
  const [activeIndex, setActiveIndex] = useState(0)
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 767)

  const firstSlide = slides[0]
  if (!firstSlide) return
  const prevStartRef = useRef(firstSlide.startDate);
  const prevEndRef = useRef(firstSlide.endDate);

  const startRefs = useRef<(HTMLDivElement | null)[]>([]);
  const endRefs = useRef<(HTMLDivElement | null)[]>([]);

  if (limitedSlides.length < 2) {
    console.warn('Slider must contain at least 2 slides')
    return null
  }
  
  const circleRatio = BASE_CIRCLE_DIAMETER / BASE_WIDTH
  const screenWidth = window.innerWidth
  const circleDiameter = circleRatio * screenWidth

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 767);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [])

  useEffect(() => {
    const currentSlide = limitedSlides[activeIndex];
    if (!currentSlide) return;
  
    const startObj = { val: prevStartRef.current };
    gsap.to(startObj, {
      val: currentSlide.startDate,
      duration: 1.2,
      snap: { val: 1 },
      onUpdate: () => {
        const el = startRefs.current[activeIndex];
        if (el) el.textContent = Math.round(startObj.val).toString();
      },
      onComplete: () => {
        prevStartRef.current = currentSlide.startDate;
      },
    });
  
    const endObj = { val: prevEndRef.current };
    gsap.to(endObj, {
      val: currentSlide.endDate,
      duration: 1.2,
      snap: { val: 1 },
      onUpdate: () => {
        const el = endRefs.current[activeIndex];
        if (el) el.textContent = Math.round(endObj.val).toString();
      },
      onComplete: () => {
        prevEndRef.current = currentSlide.endDate;
      },
    });
  }, [activeIndex, limitedSlides])
  
  return (
    <Swiper
      onSwiper={(swiper) => (swiperRef.current = swiper)}
      modules={[EffectFade, Pagination, Scrollbar]}
      simulateTouch={false}
      slidesPerView={1}
      style={{
        height: '100%',
      }}
      onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
      effect="fade"
      fadeEffect={{ crossFade: true }}
      speed={800}
      pagination={isMobile ? { clickable: true } : false}
    >
      {limitedSlides.map((slide, index) => (
        <SwiperSlide key={index}>
          <SlideContent
            events={slide.events}
            startDate={slide.startDate}
            endDate={slide.endDate}
            startRef={(el) => {
              startRefs.current[index] = el;
            }}
            endRef={(el) => {
              endRefs.current[index] = el;
            }}
            category={slide.category}
            isMobile={isMobile}
          />
        </SwiperSlide>
      ))}

      { !isMobile && (
        <CustomPagination
          slidesCount={limitedSlides.length}
          activeIndex={activeIndex}
          circleDiameter={circleDiameter}
          category={limitedSlides[activeIndex]?.category || ''}
          onPointClick={(i) => swiperRef.current?.slideToLoop(i)}
        />
      )}

      <MainNavigation
        slidesCount={limitedSlides.length}
        activeIndex={activeIndex}
        onPrev={() => swiperRef.current?.slidePrev()}
        onNext={() => swiperRef.current?.slideNext()}
      />

    </Swiper>
  );
};

export default Slider
