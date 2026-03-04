import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import Styled from "@emotion/styled"

const P = Styled.p`
  margin: 4% 2%;
  font-size: 1.4rem;
  text-align: center;
  }
`

function Me() {
    return (
        <>
            <StaticImage
                src={"../images/avatar.png"}
                alt="my photo"
                placeholder="blurred"
                className="avatarImage"
                layout="constrained"
            />
            <P>Hi! My name is Wanjing. I'm a freelance artist and previously a software developer. Nice to meet you! 😊</P>
        </>
    )
}

export default Me;