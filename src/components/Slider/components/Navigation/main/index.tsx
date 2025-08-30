import React from 'react'
import { NavigationWrapper, ArrowButton } from './styles'

interface MainNavigationProps {
  slidesCount: number
  activeIndex: number
  onPrev: () => void
  onNext: () => void
}

const MainNavigation: React.FC<MainNavigationProps> = ({ onPrev, onNext, activeIndex, slidesCount }) => {
  const isPrevActive = activeIndex !== 0
  const isNextActive = activeIndex !== slidesCount - 1 

  return (
    <NavigationWrapper>
      <ArrowButton onClick={onPrev} disabled={!isPrevActive}/>
      <ArrowButton onClick={onNext} disabled={!isNextActive}/>
    </NavigationWrapper>
  )
}

export default MainNavigation
