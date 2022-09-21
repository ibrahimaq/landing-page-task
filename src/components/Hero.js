import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { Link } from "gatsby"

const Hero = () => {
  return (
    <div className="flex flex-row -mt-20 pt-20 h-screen">
      

      <div className="overflow-hidden w-3/5 ml-auto">
        <StaticImage
          src="../images/dish.png"
          alt="Organic food on a dish"
          placeholder="blurred"
          className="bg-[#F1F7EA]"
          layout="constrained"
          
        />
      </div>

      <div className="absolute top-1/2 left-20 -translate-y-1/2 ">
          <h2 className="text-[70px] font-extrabold text-font-primary leading-[80px]">
            You deserve better
          </h2>
          <p className="text-[50px] leading-[60px] text-font-secondary mt-3">
            Consider this a <br /> taste intervention.
          </p>
          <Link
            to="/"
            className="uppercase bg-[#A2DE96] p-3 mt-10 block w-max text-font-primary text-base leading-[26px]"
          >
            Learn More
          </Link>
        </div>
    </div>
  )
}

export default Hero
