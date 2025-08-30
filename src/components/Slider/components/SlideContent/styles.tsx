import styled from 'styled-components'
import { Swiper } from "swiper/react";


export const StyledSwiper = styled(Swiper)`
  margin: 0 4.166vw 3vw;
`

export const Wrapper = styled.div`
  height: 100%;
  display: flex;
  align-items: end;
`

export const PeriodWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-family: "PT Sans", sans-serif;
  font-size: 10.416vw;
  font-weight: bold;
`

export const DateStart = styled.div`
  position: absolute;
  left: -25px;
  transform: translateX(-100%) translateY(-50%);
  color: #5D5FEF;
  pointer-events: none;
`
export const DateEnd = styled.div`
  position: absolute;
  left: 25px;
  transform: translateX(0%) translateY(-50%);
  color: #EF5DA8;
  pointer-events: none;
`
