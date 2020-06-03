import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import { Link } from "gatsby"

const AboutBlurb = () => {
  const data = useStaticQuery(graphql`
    query {
      flower: file(relativePath: { eq: "flower-mouth.png" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      fist: file(relativePath: { eq: "fist.png" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <div className="about-blurb">
      <div className="container">
        <div className="inner-blurb">
          <div className="content">
            <h3>The ability to create</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
              ipsam dolorum eius, at laborum sed quae iusto? Aspernatur non quas
              harum! Corporis, nostrum ut aspernatur placeat ab ad porro quo?
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quisquam
              at voluptate velit pariatur consequatur veritatis saepe quas,
              accusamus repudiandae molestiae architecto aliquam. Molestias
              harum maxime eos repellendus suscipit repellat quaerat?
            </p>
            <div className="btn-row">
              <Link to="/work">View Series</Link>
            </div>
          </div>
          <div className="images">
            <div className="top-right">
              <Img fluid={data.fist.childImageSharp.fluid} />
            </div>
            <div className="bottom-left">
              <Img fluid={data.flower.childImageSharp.fluid} />
            </div>
          </div>
        </div>
      </div>
      <div className="black-box"></div>
      <div className="black-box-overlay"></div>
    </div>
  )
}

export default AboutBlurb
