import React, { Fragment } from "react"
import { Themed, css } from "theme-ui"

const NewFooter = ({ socialLinks }) => (
  <>
  @Wanjing Chen 
  {`  `}
  {socialLinks
    ? socialLinks.map((platform, i, arr) => (
        <Fragment key={platform.url}>
          <Themed.a
            href={platform.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            {platform.name}
          </Themed.a>
          {arr.length - 1 !== i && (
            <Fragment>
              {` `}&bull;{` `}
            </Fragment>
          )}
        </Fragment>
      ))
    : null}
    </>
);

export default NewFooter