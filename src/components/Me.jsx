import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import { css } from "@emotion/react"

function Me() {
    return (
        <StaticImage
            src={"../images/avatar.png"}
            alt="me"
            placeholder="blurred"
            
            css={css`
                border-radius: 50%;
                margin-left: 40%;
                margin-right: 40%;
                width: 20%;
            `}
            layout="constrained"
            />
    )
}

export default Me;