import React from 'react'
import styled from 'styled-components'

const StyledAddButton = styled.div`
	width: 100px;
	height: 100px;
	background: black;
	cursor: pointer;
	border-radius: 50%;
	display: flex;
  position: relative;
  
  &:hover {
    background-image: linear-gradient(#fad390, #b71540);
  }
`

const AddButtonLineVertical = styled.div`
	width: 5px;
	height: 50px;
	background: white;
	border: 1px solid;
	border-radius: 10px;
	position: absolute;
	left: calc(50% - 3px);
	top: calc(50% - 25px);
	overflow: hidden;
`

const AddButtonLineHorizontal = styled.div`
	width: 5px;
	height: 50px;
	background: white;
	border: 1px solid;
	border-radius: 10px;
	position: absolute;
	left: calc(50% - 3px);
	top: calc(50% - 25px);
	transform: rotate(90deg);
	overflow: hidden;
`

export default function AddButton() {
	return (
		<StyledAddButton>
			<AddButtonLineVertical />
			<AddButtonLineHorizontal />
		</StyledAddButton>
	)
}
