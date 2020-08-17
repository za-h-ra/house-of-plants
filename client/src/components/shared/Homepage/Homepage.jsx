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

`

export default function Homepage() {
	return (
		<HomepageContainer>
      <TextBox>Keep your plants alive</TextBox>
		</HomepageContainer>
	)
}
