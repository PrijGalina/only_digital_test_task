import React, { useRef  } from 'react'
import {
  StyledSwiper,
  Wrapper,
  PeriodWrapper,
  DateStart,
  DateEnd,
  Category,
} from './styles'
import { SwiperSlide } from 'swiper/react'
import EventContent from '../Event'
import EventNavigation from '../Navigation/event'

interface EventData {
  year: number
  description: string
}

interface SlideContentProps {
  startDate: number
  endDate: number
  startRef: React.Ref<HTMLDivElement>
  endRef: React.Ref<HTMLDivElement>
  events: EventData[]
  category: string
  isMobile: boolean
}

const SlideContent: React.FC<SlideContentProps> = ({ startRef, endRef, events, startDate, endDate, category, isMobile}) => {
  const swiperRef = useRef<any>(null)

  return (
    <Wrapper>
      <PeriodWrapper>
        <DateStart ref={startRef}>{startDate}</DateStart>
        <DateEnd ref={endRef}>{endDate}</DateEnd>
      </PeriodWrapper>

      {isMobile && (
        <Category>{category}</Category>
      )}
      
      <StyledSwiper
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        spaceBetween={20}
        slidesPerView={4}
        breakpoints={{
          0: { slidesPerView: 2 },
          768: { slidesPerView: 3 },
          1440: { slidesPerView: 4 },
        }}        
      >
        {events.map((event, i) => (
          <SwiperSlide>
            <EventContent key={i} event={event} />
          </SwiperSlide>
        ))}

        <EventNavigation onNext={() => swiperRef.current?.slideNext()} />
      </StyledSwiper>
    </Wrapper>
  )
}

export default SlideContent