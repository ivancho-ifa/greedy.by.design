import { clamp } from './math'

import { useState, useEffect } from 'react'

function getWindowDimensions() {
   return {
      width: window.innerWidth,
      height: window.innerHeight,
   }
}

function useWindowDimensions() {
   const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions())

   useEffect(() => {
      function handleResize() {
         setWindowDimensions(getWindowDimensions())
      }

      window.addEventListener('resize', handleResize)
      return () => window.removeEventListener('resize', handleResize)
   }, [])

   return windowDimensions
}

export function useStylePositionCenter(dimensions, center) {
   const windowDimensions = useWindowDimensions()
   const halfHeight = dimensions.height / 2
   const halfWidth = dimensions.width / 2
   const yRange = { min: 0, max: windowDimensions.height - dimensions.height }
   const xRange = { min: 0, max: windowDimensions.width - dimensions.width }

   return {
      position: 'absolute',
      top: clamp(center.y - halfHeight, yRange),
      left: clamp(center.x - halfWidth, xRange),
   }
}
