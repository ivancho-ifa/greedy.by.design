import { clamp } from './math'

import { useState, useLayoutEffect } from 'react'

function getBodyDimensions() {
   return {
      width: document.body.clientWidth,
      height: document.body.clientHeight,
   }
}

function useBodyDimensions() {
   const [bodyDimensions, setBodyDimensions] = useState(getBodyDimensions())

   useLayoutEffect(() => {
      function handleResize() {
         setBodyDimensions(getBodyDimensions())
      }

      window.addEventListener('resize', handleResize)
      return () => window.removeEventListener('resize', handleResize)
   }, [])

   return bodyDimensions
}

export function useStylePositionCenter(elementDimensions, targetCenter) {
   const bodyDimensions = useBodyDimensions()
   const elementCenterY = elementDimensions.height / 2
   const elementCenterX = elementDimensions.width / 2
   const yRange = { min: 0, max: bodyDimensions.height - elementDimensions.height }
   const xRange = { min: 0, max: bodyDimensions.width - elementDimensions.width }

   return {
      position: 'absolute',
      top: clamp(targetCenter.y - elementCenterY, yRange),
      left: clamp(targetCenter.x - elementCenterX, xRange),
   }
}
