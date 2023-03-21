import { deleteLog } from 'utils/logs'

export default async function handler(request, response) {
    if (request.method !== 'DELETE') {
        return response.status(405).json({ error: `Method ${request.method} not allowed` })
    }

    const { id } = JSON.parse(request.body)

    const deleteError = await deleteLog(id)
    if (!deleteError) {
        return response.status(200).send()
    } else {
        return response.status(500).json({ error: deleteError.error })
    }
}
