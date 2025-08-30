import styled from 'styled-components'
import arrowMain from '@/images/arrow_main.svg'

export const NavigationWrapper = styled.div`
  width: 100px;
  height: 100%;
  background-color: white;
  position: absolute;
  top: 0;
  right: 0;
  z-index: 1;

  @media (max-width: 767px) {
    opacity: 0.5;
    width: 50%;
  }
`

export const ArrowButton = styled.button`
  position: absolute;
  right: 40px;
  top: 50%;
  transform: translateY(-50%);
  background-color: #ffffff;
  background-image: url(${arrowMain});
  background-repeat: no-repeat;
  background-position: center;
  background-size: 0.6vw;
  transform: rotate(180deg) translateY(50%);
  border: 1px solid #ccc;
  border-radius: 50%;
  width: 2.08vw;
  height: 2.08vw;
  cursor: pointer;
  font-size: 18px;
  font-weight: bold;
  color: #42567A;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 2px 6px rgba(0,0,0,0.15);
  z-index: 1;
  
  &:hover {
    background-color: #f5f5f5; 
  }

  @media (max-width: 767px) {
    display: none;
  }
`