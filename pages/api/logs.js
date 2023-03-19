import { insertLog } from "utils/logs"

export default async function handler(request, response) {
    if (request.method !== 'POST') {
        return response.status(405).json({ what: `Method ${request.method} not allowed` })
    }

    const log = JSON.parse(request.body)
    if (log._id === 'new-log') {
        return response.status(400).json({ what: 'Can not submit a log with URI /new-log, it is reserved' })
    }

    const result = await insertLog(log)

    if (result.acknowledged) {
        return response.status(201).json(result)
    } else {
        return response.status(500).json({ what: 'MongoDB request wasn\'t aknowledged' })
    }
}
