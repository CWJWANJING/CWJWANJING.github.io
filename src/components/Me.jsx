import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import { css } from "@emotion/react"
import Styled from "@emotion/styled"

const P = Styled.p`
  margin: 2% 0% 0% 0%;
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

                css={css`
                border-radius: 50%;
                margin-left: 42.25%;
                margin-right: 42.25%;
                width: 15%;
            `}
                layout="constrained"
            />
            <P>Hi! My name is Wanjing. I'm a software developer who draws and writes. Nice to meet you! 😊</P>
        </>
    )
}

export default Me;