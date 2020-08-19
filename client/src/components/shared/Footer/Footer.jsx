import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import Logo from '../Logo/Logo'
import Social from '../../Social/Social'

const FooterContainer = styled.footer`
	display: flex;
	justify-content: space-around;
  // background-image: linear-gradient(to right, #44A08D , #093637);
  background-color: #093028;
	padding: 40px 0px;
	width: 100%;
	bottom: 0;
  position: static;
`

const FooterCategory = styled.div`
	display: flex;
  flex-flow: column;
  .title {
    color: white;
    font-weight: 600;
    font-size: 20px;
  }
  
  a {
    color: #ffffff;
    text-decoration: none;
    font-weight: 300;
    &:hover, &.active {
      text-shadow: 0 0 .75px #ffd9da, 0 0 .75px #ffd9da;
      text-decoration: underline;
  }
`

const SocialContainer = styled.div`
	line-height: 50px;
`



export default function Footer() {
	return (
    <FooterContainer>
      <Logo />
			<FooterCategory>
				<div className='title'>connect with us</div>
				<SocialContainer>
					<Social />
				</SocialContainer>
			</FooterCategory>
			<FooterCategory>
				<div className='title'>company</div>
				<Link to='/about'>about us</Link>
				<Link to='/careers'>careers</Link>
				<Link to='/press'>press</Link>
			</FooterCategory>
		</FooterContainer>
	)
}
