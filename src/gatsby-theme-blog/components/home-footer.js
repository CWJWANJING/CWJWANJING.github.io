import React, { Fragment } from "react"
import { Themed } from "theme-ui"

const NewFooter = ({ socialLinks }) => (
  <div style={{textAlign: "center", padding: "1% 0%"}}>
    @Wanjing Chen
    {` `}&bull;
    {` `}
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
  </div>
);

export default NewFooter