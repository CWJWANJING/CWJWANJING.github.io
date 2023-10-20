import * as React from "react"
import Navigation from "../components/Navigation"
import WebFooter from "../components/WebFooter"
import { useStaticQuery, graphql } from "gatsby" // to query for image data
import "../styles/slideshow.css"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

export default function Webcomics() {
  // const sliderImages = ["../images/artwork/webcomics/windy.JPG", "../images/artwork/webcomics/heavyMetal.JPG"];
  const [activeImageNum, setCurrent] = React.useState(0);
  const query = useStaticQuery(graphql`
      query MyQuery {
        allFile(filter: {relativeDirectory: {in: "artwork/webcomics"}}) {
          nodes {
            childImageSharp {
              gatsbyImageData
            }
          }
        }
      }
    `);
  let sliderImages = [];
  for (let i = 0; i < Object.keys(query.allFile.nodes).length; i++) {
    sliderImages.push(getImage(query.allFile.nodes[i].childImageSharp));
  }
  console.log(sliderImages);
  const length = Object.keys(sliderImages).length;
  const nextSlide = () => {
    setCurrent(activeImageNum === length - 1 ? 0 : activeImageNum + 1);
  };
  const prevSlide = () => {
    setCurrent(activeImageNum === 0 ? length - 1 : activeImageNum - 1);
  };
  if (!Array.isArray(sliderImages) || sliderImages.length <= 0) {
    return null;
  }
  return (
    <>
      <Navigation />
      <div className="slideshow">
        {/* <div className="left">
          <FontAwesomeIcon icon="fa-solid fa-arrow-left" onClick={prevSlide}/>
        </div>
        <div className="right">
          <FontAwesomeIcon icon="fa-solid fa-arrow-right" onClick={nextSlide}/>
        </div> */}
        <div className="left" onClick={prevSlide}>&#10094;</div>
        {sliderImages.map((currentSlide, ind) => {
          return (
            <div
              className={ind === activeImageNum ? "currentSlide active" : "currentSlide"}
              key={ind}
            >
              {ind === activeImageNum && <GatsbyImage className="slide" image={currentSlide} alt=""/>}
            </div>
          );
        })}
        <div className="right" onClick={nextSlide}>&#10095;</div>
        <div className="slideshowDots">
          {sliderImages.map((_, idx) => (
            <div
              key={idx}
              className={`slideshowDot${activeImageNum === idx ? " active" : ""}`}
              onClick={() => {
                setCurrent(idx);
              }}></div>
              ))}
        </div>
      </div>
      <WebFooter />
    </>
  )
}