import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  width: 100%;

  & > :last-child {
    border-bottom: 1px solid ${props => props.theme['gray-2']};
  }
`

const Table = ({ children }) => (
  <Wrapper>
    {children}
  </Wrapper>
)

export default Table
