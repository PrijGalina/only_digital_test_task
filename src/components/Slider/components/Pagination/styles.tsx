import styled from 'styled-components'

interface PaginationWrapperProps {
  $circleDiameter: number;
  color: string;
}
export const PaginationWrapper = styled.div<PaginationWrapperProps>`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 0;
  height: 0;
  z-index: 100;

  &::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: ${({ $circleDiameter }) => $circleDiameter}px;
    height: ${({ $circleDiameter }) => $circleDiameter}px;
    border: 1px solid ${({ color }) => color};
    border-radius: 50%;
    pointer-events: none;
    opacity: 0.2;
  }

  @media (max-width: 767px) { 
    &::before {
      display: none;
    }
  }
`

interface PaginationPointProps {
  x: number;
  y: number;
  $pointSize: number;
  color: string;
}
export const PaginationPoint = styled.div<PaginationPointProps>`
  position: absolute;
  z-index: 10;
  left: ${({ x }) => x}px;
  top: ${({ y }) => y}px;
  width: ${({ $pointSize }) => $pointSize}px;
  height: ${({ $pointSize }) => $pointSize}px;
  border-radius: 50%;
  background-color: ${({ color }) => color};
  cursor: pointer;
  transform: translate(-50%, -50%);
`

interface PaginationLabelProps {
  x: number;
  y: number;
  color: string;
  $rotation: number;
}
export const PaginationLabel = styled.span<PaginationLabelProps>`
  position: absolute;
  z-index: 1000000;
  left: ${({ x }) => x}px;
  top: ${({ y }) => y}px;
  padding-left: 10.16vw;
  color: ${({ color }) => color};
  transform: translate(-50%, -50%) rotate(${({ $rotation }) => -$rotation}deg);

  font-family: "PT Sans", sans-serif;
  font-size: 1.04vw;
  font-style: normal;
  font-weight:bold;
  line-height: 30;
  pointer-events: none;
`

interface PaginationNumberProps {
  x: number;
  y: number;
  $rotation: number;
}
export const PaginationNumber = styled.span<PaginationNumberProps>`
  position: absolute;
  left: ${({ x }) => x}px;
  top: ${({ y }) => y}px;
  z-index: 10;
  transform: translate(-50%, -50%) rotate(${({ $rotation }) => -$rotation}deg);
  font-family: "PT Sans", sans-serif;
  font-size: 0px;
  font-style: normal;
  line-height: 30;
  pointer-events: none;
`