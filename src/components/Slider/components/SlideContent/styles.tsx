import styled from 'styled-components'
import { Swiper } from "swiper/react";


export const StyledSwiper = styled(Swiper)`
  margin: 0 4.166vw 3vw;
`

export const Wrapper = styled.div`
  height: 100%;
  display: flex;
  align-items: end;

  @media (max-width: 767px) {
    display: block; 
  }
`

export const PeriodWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-family: "PT Sans", sans-serif;
  font-size: 10.416vw;
  font-weight: bold;

  @media (max-width: 767px) {
    font-size: 17.5vw;
    position: relative;
    width: 100%;
    height: 200px;
    top: 100px;
    left: 50%;
    transform: none;
  }
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
export const Category = styled.p`
  font-family: "PT Sans", sans-serif;
  font-style: normal;
  font-weight: bold;
  line-height: 120%;
  font-size: 20px;
  margin: 0 20px 20px;
  color: #42567A;

  &::after {
    content: '';
    display: block;
    width: 100%;
    height: 1px;
    background-color: #C7CDD9;
    margin-top: 8px;
  }
`