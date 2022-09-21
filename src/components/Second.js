import React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import { useInView } from 'react-intersection-observer'

const Second = () => {

    const { ref, inView } = useInView({
        threshold: 0.5,
        triggerOnce: true
       
    })

  return (
    <div ref={ref} className="pt-14 flex flex-row items-center overflow-x-hidden">
      <div className="w-1/2 flex justify-center">
        <StaticImage
          src="../images/mask-group-x2.png"
          alt="sliced fruits and vegetables"
          placeholder="blurred"
          width={500}
          className={inView? 'transition-all duration-500 ease-out -left-0' : '-left-full'}
          
        />
      </div>

      <div className="w-1/2">
        <h2 className={inView? 'text-font-secondary text-[38px] transition-transform duration-500 translate-x-0' : 'relative translate-x-full'}>
          We make it easy <br /> for you to cook <br /> delicious dinners
        </h2>
        <p className={inView? 'w-[404px] text-font-secondary mt-5 opacity-100 transition-opacity delay-700 duration-500 ease-in-out' : 'opacity-0'}>
          Simply choose your recipes from a weekly menu and we’ll deliver
          freshly picked vegetables, pre-portioned ingredients and step-by-step
          recipes direct to your door ready for you to cook.
        </p>
        <Link
          to="/"
          className={inView? 'uppercase bg-[#A2DE96] p-3 mt-8  block w-max text-font-primary text-base leading-[26px] opacity-100 transition-opacity duration-500 delay-1000' : 'opacity-0'}
        >
          Shop Now
        </Link>
      </div>
    </div>
  )
}

export default Second
