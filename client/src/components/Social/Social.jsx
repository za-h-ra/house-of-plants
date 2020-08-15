import React from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { library } from "@fortawesome/fontawesome-svg-core"
import { fab } from "@fortawesome/free-brands-svg-icons"

const SocialContainer = styled.div`
  display: flex;
  justify-content: space-around;
  height: 25px;
  margin: 0 10px;
  a {
    color: #ffffff;
    text-decoration: none;
    &:hover {
      color: #ffd9da;
    }
  }
`

export default function Social() {
  return (
    <>
      <SocialContainer>
        <a href="#">
          <FontAwesomeIcon
            className="social-icons"
            icon={["fab", "facebook-f"]}
          />
        </a>
        <a href="#">
          <FontAwesomeIcon
            className="social-icons"
            icon={["fab", "instagram"]}
          />
        </a>
        <a href="#">
          <FontAwesomeIcon className="social-icons" icon={["fab", "twitter"]} />
        </a>
        </SocialContainer>
    </>
  )
}

library.add(fab);