import { updateLog } from "utils/logs"

export default async function handler(request, response) {
    if (request.method !== 'POST') {
        return response.status(405).json({ error: `Method ${request.method} not allowed` })
    }

    const log = JSON.parse(request.body)
    if (log._id === 'new-log') {
        return response.status(400).json({ error: 'Can not update a log with URI /new-log, it is unmodifiable' })
    }

    const updateError = await updateLog(log._id, log)
    if (!updateError) {
        return response.status(200)
    } else {
        return response.status(500).json({ error: updateError.error })
    }
}
