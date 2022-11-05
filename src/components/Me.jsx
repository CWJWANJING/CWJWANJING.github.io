import React from "react";
import { StaticImage } from "gatsby-plugin-image";

function Me() {
    return (
        <StaticImage
            src={"../images/avatar.png"}
            alt="me"
            placeholder="blurred"
            layout="fixed"
            width={200}
            height={200} />
    )
}

export default Me;