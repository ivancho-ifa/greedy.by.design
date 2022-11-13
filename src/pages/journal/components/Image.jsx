import { useState, useLayoutEffect, useRef } from 'react'
import { useStylePositionCenter } from './utils/componentManipulation.js'

export default function Image(params) {
   const targetRef = useRef()
   const [dimensions, setDimensions] = useState({ width: 0, height: 0 })

   const positionCenterStyle = useStylePositionCenter(dimensions, params.center)

   useLayoutEffect(() => {
      if (targetRef.current) {
         const bounds = targetRef.current.getBoundingClientRect()
         setDimensions({
            width: bounds.width,
            height: bounds.height,
         })
      }
   }, [])

   return (
      <img
         ref={targetRef}
         className='titleImage'
         src={params.src}
         alt={params.alt}
         style={positionCenterStyle}
      />
   )
}
