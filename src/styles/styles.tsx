import styled from 'styled-components'

interface AppWrapperProps {
  color: string;
}

export const AppWrapper = styled.div<AppWrapperProps>`
  position: relative;
  width: 75vw;
  height: 100vh;
  margin: 0 8.33vw 0 16.67vw;
  padding: 0;
  box-sizing: border-box;
  border-left: 1px solid ${({ color }) => color};
  border-right: 1px solid ${({ color }) => color};

  &::before, 
  &::after {
    content: '';
    position: absolute;
    background-color: ${({ color }) => color};
  }

  &::before {
    top: 50%;
    left: 0;
    width: 100%;
    height: 1px;
    transform: translateY(-50%);
  }

  &::after {
    left: 50%;
    top: 0;
    width: 1px;
    height: 100%;
    transform: translateX(-50%);
  }
`;

export const AppTitle = styled.h1`
  position: absolute;
  margin: 0;
  font-size: 2.9vw;
  width: 20.83vw;
  left: 31px;
  top: calc(100vw * 0.0885);
  color: #42567A;
  font-family: "PT Sans", sans-serif;
  font-style: normal;
  font-weight: bold;
  line-height: 120%;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -31px;
    width: 5px;
    height: 100%;
    background: linear-gradient(135deg, #3877EE, #EF5DA8);
    transform: translateX(-50%);
  }
`