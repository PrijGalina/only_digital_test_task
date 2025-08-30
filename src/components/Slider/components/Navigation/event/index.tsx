import React from 'react'
import { NavigationWrapper, ArrowButton } from './styles'

interface EventNavigationProps {
  onNext: () => void
}

const EventNavigation: React.FC<EventNavigationProps> = ({ onNext }) => {
  return (
    <NavigationWrapper>
      <ArrowButton onClick={onNext} />
    </NavigationWrapper>
  )
}

export default EventNavigation
