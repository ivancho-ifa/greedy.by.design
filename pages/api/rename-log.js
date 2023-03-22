import { changeLogId } from 'utils/logs'

// TODO: Validate incoming URI
export default async function handler(request, response) {
   if (request.method !== 'PUT') {
      return response.status(405).json({ error: `Method ${request.method} not allowed` })
   }

   const { currentId, newId } = JSON.parse(request.body)

   const renameResult = await changeLogId(currentId, newId)
   if (renameResult.success) {
      return response.status(200).json({ insertedId: renameResult.insertedId })
   } else {
      return response.status(500).json({ error: renameResult.error })
   }
}
