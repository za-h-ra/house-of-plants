import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import Logo from '../Logo/Logo'
import Social from '../../Social/Social'

const FooterContainer = styled.footer`
	display: flex;
	justify-content: space-around;
	background-color: #0a3d33;
	padding: 40px 0px;
	width: 100%;
	bottom: 0;
	position: fixed;
`

const FooterCategory = styled.div`
	display: flex;
	flex-flow: column;
`

export default function Footer() {
	return (
		<FooterContainer>
			<Logo />
      <FooterCategory>
        <div className="title">connect with us</div>
        <div>
        <Social />
        </div>
      </FooterCategory>
      <FooterCategory>
        <div className="title">company</div>
        <Link to="/about">about us</Link>
        <Link to="/careers">careers</Link>
        <Link to="/press">press</Link>
      </FooterCategory>
		</FooterContainer>
	)
}
