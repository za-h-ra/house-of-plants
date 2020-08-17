import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const HomepageContainer = styled.div`
	display: flex;
	flex-flow: column;
	align-items: center;
	justify-content: center;
	min-height: 800px;
  background-color: #0a3d33;
  background-size: cover;
  background-positon: 
  * {
    box-sizing: border-box;
  }
`

const PlantImage = styled.img`
	height: 100%;
	width: 100%;
`

const TextBox = styled.div`
  display: flex;
  flex-flow: column;
  align-items: center;
  z-index: 1;
  color: white;

`

export default function Homepage() {
	return (
		<HomepageContainer>
      <PlantImage src='https://images.unsplash.com/photo-1497990571654-77aa8ec36038?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1334&q=80' />
      <TextBox>Keep your plants alive</TextBox>
		</HomepageContainer>
	)
}