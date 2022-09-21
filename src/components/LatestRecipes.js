import React from "react"

import { StaticImage } from "gatsby-plugin-image"
import { Link } from "gatsby"

import {ArrowRightIcon} from "@heroicons/react/24/outline"
import {ArrowLeftIcon} from "@heroicons/react/24/outline"
import { ShoppingCartIcon } from "@heroicons/react/24/outline"

const LatestRecipes = () => {
  return (
    /*//////////// {CARDS SECTION TITLE} //////////// */
    <div className="w-4/5 mx-auto mt-24 flex flex-col mb-40">
      <div className="flex flex-row justify-between">
        <h2 className="font-light text-[44px] leading-[54px]">
          Latest recipes
        </h2>
        <div className="flex flex-row space-x-6 items-end">
          <button><ArrowLeftIcon className="w-6 h-6 text-gray-300" /></button>
          <button><ArrowRightIcon className="w-6 h-6" /></button>
        </div>
      </div>

      {/* //////////// {CARDS SECTION} //////////// */}

      <div className="flex flex-row space-x-14 mt-11">
        <div className="flex flex-row items-end">
          <StaticImage
            src="../images/cards/joseph-gonzalez-fdlZBWIP0aM-unsplash.png"
            alt="Portobello baked eggs with avocado and bread"
            className="rounded-full"
            aspectRatio={1}
          />

          <div className="relative mt-3 pl-6 card-shadow -ml-4">
            <div className="flex flex-col pb-3 pt-3">
              <p className="text-sm font-light leading-[18px]">
                Portobello Baked Eggs with avocado &amp; bread
              </p>
              <span className="text-base font-semibold leading-[26px] mt-3 text-[#4EC6A6]">
                £8
              </span>
            </div>
            <Link to="/" className="absolute flex items-center justify-center right-0 bottom-0 mr-1 mb-1 h-8 w-8 before:absolute before:bg-[#FF947B] before:h-full before:w-full before:rounded-tl-full before:-z-10">
              <ShoppingCartIcon className="h-4 w-4 mt-1 ml-1" />
            </Link>
          </div>
        </div>

        <div className="flex flex-row items-end">
          <StaticImage
            src="../images/cards/joseph-gonzalez-fdlZBWIP0aM-unsplash.png"
            alt="Portobello baked eggs with avocado and bread"
            className="rounded-full"
            aspectRatio={1}
          />

          <div className="relative mt-3 pl-6 card-shadow -ml-4">
            <div className="flex flex-col pb-3 pt-3">
              <p className="text-sm font-light leading-[18px]">
                Portobello Baked Eggs with avocado &amp; bread
              </p>
              <span className="text-base font-semibold leading-[26px] mt-3 text-[#4EC6A6]">
                £8
              </span>
            </div>
            <Link to="/" className="absolute flex items-center justify-center right-0 bottom-0 mr-1 mb-1 h-8 w-8 before:absolute before:bg-[#FF947B] before:h-full before:w-full before:rounded-tl-full before:-z-10">
              <ShoppingCartIcon className="h-4 w-4 mt-1 ml-1" />
            </Link>
          </div>
        </div>

        <div className="flex flex-row items-end">
          <StaticImage
            src="../images/cards/joseph-gonzalez-fdlZBWIP0aM-unsplash.png"
            alt="Portobello baked eggs with avocado and bread"
            className="rounded-full"
            aspectRatio={1}
          />

          <div className="relative mt-3 pl-6 card-shadow -ml-4">
            <div className="flex flex-col pb-3 pt-3">
              <p className="text-sm font-light leading-[18px]">
                Portobello Baked Eggs with avocado &amp; bread
              </p>
              <span className="text-base font-semibold leading-[26px] mt-3 text-[#4EC6A6]">
                £8
              </span>
            </div>
            <Link to="/" className="absolute flex items-center justify-center right-0 bottom-0 mr-1 mb-1 h-8 w-8 before:absolute before:bg-[#FF947B] before:h-full before:w-full before:rounded-tl-full before:-z-10">
              <ShoppingCartIcon className="h-4 w-4 mt-1 ml-1" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LatestRecipes
