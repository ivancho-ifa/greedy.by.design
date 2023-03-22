import logStyles from 'styles/LogThumbnail.module.css'
import editLogStyles from 'styles/EditLogThumbnail.module.css'

import { useState, Fragment } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'

export default function LogThumbnail({ log, showPreview }) {
   const [isImageShown, setIsImageShown] = useState(false)
   const [mousePos, setMousePos] = useState({})
   const [newUri, setNewUri] = useState(log._id)
   const [uri, setUri] = useState(log._id)
   const [deleted, setDeleted] = useState(false)
   const router = useRouter()

   const handleUriChange = (event) => {
      setNewUri(event.target.value)
   }

   const submitUriChange = async (event) => {
      event.preventDefault()

      const response = await fetch('/api/rename-log', {
         method: 'PUT',
         body: JSON.stringify({
            currentId: uri,
            newId: newUri,
         }),
      })

      const responseBody = await response.json()
      if (response.status === 200) {
         const oldUri = uri
         setUri(responseBody.insertedId)

         alert(`Successfully renamed log from ${oldUri} to ${responseBody.insertedId}`)
      } else {
         alert(`Failed to rename log, error: ${response.status}, ${responseBody.error}`)
      }
   }

   const deleteLog = async (_event) => {
      const response = await fetch('/api/delete-log', {
         method: 'DELETE',
         body: JSON.stringify({
            id: uri,
         }),
      })

      setDeleted(true)

      if (response.status === 200) {
         alert(`Successfully deleted log ${uri}`)
      } else {
         alert(`Failed to delete log, error: ${response.status}, ${JSON.stringify(await response.json())}`)
      }
   }

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
               src={log.titleImage}
               alt={log.titleImageAlt}
               fill
            />
         </div>
      )
   }

   const date = new Date(log.date)

   if (deleted) {
      return null
   }

   return (
      <Fragment>
         <Link href={`${router.asPath}/${uri}`}>
            <div
               className={`
               ${logStyles.Log}
               ${logStyles.padded}
               ${logStyles.collapsingTopBottomBorder}
               ${log.draft ? logStyles.draft : logStyles.published}
            `}
               onMouseEnter={handleEnter}
               onMouseLeave={handleLeave}
            >
               <header>
                  <p className={`${logStyles.subtitle}`}>
                     <time dateTime={date}>{date.toLocaleDateString()}</time>
                  </p>
                  <h2 className={`${logStyles.title}`}>{log.title}</h2>
                  {isImageShown ? getImage() : null}
               </header>
            </div>
         </Link>

         {!showPreview ? (
            <form
               className={`${editLogStyles.uriChange}`}
               onSubmit={submitUriChange}
            >
               <div>
                  <label htmlFor={`${editLogStyles.uriChangeInput}`}>URI: {router.asPath}/</label>
                  <input
                     type='text'
                     id={`${editLogStyles.uriChangeInput}`}
                     value={newUri}
                     onChange={handleUriChange}
                  />
               </div>
               <input
                  type='submit'
                  className={`${editLogStyles.button}`}
                  value='Change URI'
               />
               <input
                  type='button'
                  className={`${editLogStyles.button} ${editLogStyles.dangerous}`}
                  value='Delete log'
                  onClick={deleteLog}
               />
            </form>
         ) : null}
      </Fragment>
   )
}
