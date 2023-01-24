import { useState } from 'react'

export function usePreloadImage(src) {
   const [imageCache, setImageCache] = useState(null)

   if (!imageCache) {
      const preloadImage = new Promise((resolve, reject) => {
         const img = new Image()
         img.onload = function () {
            resolve(img)
         }
         img.onerror = img.onabort = function () {
            reject(src)
         }
         img.src = src
      })

      preloadImage
         .then((img) => {
            if (!imageCache) {
               setImageCache(img)
            }

            console.log(`Preloaded ${src}`)
         })
         .catch((err) => {
            console.log(`Failed to preload ${src}: ${err}`)
         })
   }
}
