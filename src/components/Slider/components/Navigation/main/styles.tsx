import styled from 'styled-components'
import arrowMain from '@/images/arrow_main.svg'

export const NavigationWrapper = styled.div``

export const ArrowButton = styled.button`
  position: absolute;
  top: 70%;
  transform: translateY(-50%);
  background: white;
  border: 1px solid #ccc;
  border-radius: 50%;
  width: calc(100vw * 0.02604);
  height: calc(100vw * 0.02604);
  cursor: pointer;
  font-size: 18px;
  font-weight: bold;
  color: #42567A;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 2px 6px rgba(0,0,0,0.15);
  z-index: 1;

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
    box-shadow: none;
  }
  
  &:hover {
    background: #f5f5f5;
  }

  &:first-child {
    left: 31px;
    background-image: url(${arrowMain});
    background-repeat: no-repeat;
    background-position: center;
    background-size: 0.6vw;
  }

  &:last-child {
    left: 80px;
    background-image: url(${arrowMain});
    background-repeat: no-repeat;
    background-position: center;
    transform: rotate(180deg) translateY(50%);
    background-size: 0.6vw;
  }

  @media (max-width: 767px) {
    top:60%;
    width: 25px;
    height: 25px;
    z-index: 1000;

    &:last-child {
      left: 65px;
    }
  }
`