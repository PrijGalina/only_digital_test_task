import styled from 'styled-components'

export const Wrapper = styled.div``

export const Title = styled.p`
  user-select: none;
  font-family: "Bebas Neue", sans-serif;
  margin: 0 0 15px;
  font-size: 25px;
  color: #3877EE;
`

export const Description = styled.p`
  user-select: none;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;

  font-family: "PT Sans", sans-serif;
  margin: 0;
  font-size: 20px;
  color: #42567A;
`