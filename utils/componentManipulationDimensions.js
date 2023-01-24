import { useState, useLayoutEffect } from 'react'

function useElementDimensions(element) {
   const [dimensions, setDimensions] = useState({ width: 0, height: 0 })

   useLayoutEffect(() => {
      if (element.current) {
         const bounds = element.current.getBoundingClientRect()
         setDimensions({ width: bounds.width, height: bounds.height })
      }
   }, [element])

   return { dimensions, setDimensions }
}

export function useStyleFullscreenExcludingNavigation(navigation) {
   const { dimensions } = useElementDimensions(navigation)

   return { minHeight: window.innerHeight - dimensions.height }
}
