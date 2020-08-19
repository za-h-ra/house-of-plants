import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const HomepageContainer = styled.div`
	display: flex;
	flex-flow: column;
	align-items: center;
	justify-content: center;
	min-height: 800px;
  background-image: url("https://images.unsplash.com/photo-1497990571654-77aa8ec36038?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1334&q=80");
  background-size: cover;
  background-positon: center;
  * {
    box-sizing: border-box;
  }
`

const TextBox = styled.div`
  display: flex;
  flex-flow: column;
  align-items: center;
  z-index: 1;
  color: white;
  font-size: 50px;
  font-weight: 500;

`

const StyledButton = styled.button`
  background-color: #0a3d62; 
  font-weight: 500;
  width: 100%;
  text-align: center;
  margin: 20px auto;
  border: 2px solid #0a3d62;
  padding: 24px 20px;
  color: white;
  outline: none;
  border-radius: 40px;
  text-transform: uppercase;
  font-family: 'Quicksand', sans-serif;
  box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.25);
  &:hover {
    background-color: #3c6382;
    border: none;
  }
`

export default function Homepage() {
	return (
		<HomepageContainer>
      <TextBox>Keep your plants alive</TextBox>
      <Link to='/signup'><StyledButton>get started</StyledButton></Link>
		</HomepageContainer>
	)
}
