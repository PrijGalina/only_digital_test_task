import React, { useRef, useEffect, useState } from 'react'
import gsap from 'gsap'
import { PaginationWrapper, PaginationPoint, PaginationLabel, PaginationNumber } from './styles'
import { BASE_GRAY, PAGINATION_POINT_SIZE } from '../../../../variables'

interface CustomPaginationProps {
  slidesCount: number
  activeIndex: number
  circleDiameter: number
  category: string
  onPointClick: (index: number) => void
}

const CustomPagination: React.FC<CustomPaginationProps> = ({
  slidesCount,
  activeIndex,
  circleDiameter,
  category,
  onPointClick,
}) => {
  const circleRadius = circleDiameter / 2
  const wrapperRef = useRef<HTMLDivElement>(null)
  const [rotation, setRotation] = useState(0)

  useEffect(() => {
    if (!wrapperRef.current) return

    const angle = (2 * Math.PI * activeIndex) / slidesCount
    const targetAngle = -Math.PI / 4
    const rotationDeg = ((targetAngle - angle) * 180) / Math.PI
    setRotation(rotationDeg)

    gsap.to(wrapperRef.current, {
      rotation: rotationDeg,
      transformOrigin: "50% 50%",
      duration: 0.8,
      ease: "power3.inOut",
    })
  }, [activeIndex, slidesCount])

  return (
    <>  
      <PaginationWrapper 
        $circleDiameter={circleDiameter}
        color={BASE_GRAY}
        ref={wrapperRef}
      >
        {Array.from({ length: slidesCount }).map((_, i) => {
          const angle = (2 * Math.PI * i) / slidesCount
          const x = circleRadius * Math.cos(angle)
          const y = circleRadius * Math.sin(angle)
          const isActive = i === activeIndex
          
          const pointRef = useRef<HTMLDivElement>(null)
          const numberRef = useRef<HTMLSpanElement>(null)

          const handleEnter = () => {
            gsap.to(pointRef.current, {
              width: "2.92vw",
              height: "2.92vw",
              border: `1px solid ${BASE_GRAY}`,
              backgroundColor: "white",
              duration: 0.3,
              ease: "power2.out"
            })
            gsap.to(numberRef.current, {
              fontSize: "1.04vw",
              duration: 0.3,
              ease: "power2.out"
            })
          }

          const handleLeave = () => {
            if (isActive) return 
            gsap.to(pointRef.current, {
              width: PAGINATION_POINT_SIZE,
              height: PAGINATION_POINT_SIZE,
              border: `0px solid ${BASE_GRAY}`,
              backgroundColor: BASE_GRAY,
              duration: 0.3,
              ease: "power2.inOut"
            })
            gsap.to(numberRef.current, {
              fontSize: 0,
              duration: 0.3,
              ease: "power2.inOut"
            })
          }

          useEffect(() => {
            if (!pointRef.current || !numberRef.current) return
            if (isActive) {
              handleEnter()
            } else {
              handleLeave()
            }
          }, [isActive])

          return (
            <div key={i}>
              <PaginationPoint
                onClick={() => onPointClick(i)}
                onMouseEnter={handleEnter}
                onMouseLeave={handleLeave}
                ref={pointRef}
                key={i}
                x={x}
                y={y}
                $pointSize={PAGINATION_POINT_SIZE}
                color={BASE_GRAY}
              />
              <PaginationNumber ref={numberRef} x={x} y={y} $rotation={rotation}>
                {i}
              </PaginationNumber>
              {isActive && (
                <PaginationLabel
                  x={x}
                  y={y}
                  color={BASE_GRAY}
                  $rotation={rotation}
                >
                  {category}
                </PaginationLabel>
              )}
            </div>
          )
        })}
      </PaginationWrapper>
    </>
  )
}

export default CustomPagination