import logStyles from 'styles/Log.module.css'

import { useState, Fragment } from 'react'
import Image from 'next/image'

export default function Log(params) {
   const [isImageShown, setIsImageShown] = useState(false)
   const [mousePos, setMousePos] = useState({})

   const handleEnter = (event) => {
      setIsImageShown(true)
      setMousePos({ x: event.pageX, y: event.pageY })
      console.log(mousePos)
   }

   const handleLeave = () => {
      setIsImageShown(false)
   }

   const getImage = () => {
      return (
         <div
            style={{
               position: 'absolute',
               // TODO: Handle different sizes
               top: mousePos.y - 150,
               left: mousePos.x - 200,
               width: 400,
               height: 300,
            }}
         >
            <Image
               className={`${logStyles.titleImage}`}
               src={params.titleImage}
               alt={params.titleImageAlt}
               fill
            />
         </div>
      )
   }

   const date = new Date(params.date)

   return (
      <Fragment>
         <div
            className={`${logStyles.Log} ${logStyles.collapsingTopBottomBorder} ${logStyles.padded}`}
            onMouseEnter={handleEnter}
            onMouseLeave={handleLeave}
         >
            <header>
               <p className={`${logStyles.subtitle}`}>
                  <time dateTime={date}>{date.toLocaleDateString()}</time>
               </p>
               <h2 className={`${logStyles.title}`}>{params.title}</h2>
               {isImageShown ? getImage() : null}
            </header>
         </div>
      </Fragment>
   )
}
