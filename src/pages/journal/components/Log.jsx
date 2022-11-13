import './Log.css'

import ImageWrapper from './Image'
import { usePreloadImage } from './utils/image'

import { useState, Fragment } from 'react'

export default function Log(params) {
   const [isImageShown, setIsImageShown] = useState(false)
   const [mousePos, setMousePos] = useState({})

   usePreloadImage(params.titleImage)

   const handleEnter = (event) => {
      setIsImageShown(true)
      setMousePos({ x: event.clientX, y: event.clientY })
   }

   const handleLeave = () => {
      setIsImageShown(false)
   }

   const getImage = () => {
      return (
         <ImageWrapper
            src={params.titleImage}
            alt={params.titleImageAlt}
            center={mousePos}
         />
      )
   }

   return (
      <Fragment>
         <div
            className='Log collapsingTopBottomBorder padded'
            onMouseEnter={handleEnter}
            onMouseLeave={handleLeave}
         >
            <header>
               <p className='subtitle'>
                  <time dateTime={params.date}>{params.date.toLocaleDateString()}</time>
               </p>
               <h2>{params.title}</h2>
            </header>
            {isImageShown ? getImage() : null}
         </div>
      </Fragment>
   )
}
