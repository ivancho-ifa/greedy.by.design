import { insertLog } from "utils/logs"

export default async function handler(request, response) {
    if (request.method !== 'POST') {
        return response.status(405).json({ what: `Method ${request.method} not allowed` })
    }

    const result = await insertLog(JSON.parse(request.body))

    if (result.acknowledged) {
        return response.status(201).json(result)
    } else {
        return response.status(500).json({ what: 'MongoDB request wasn\'t aknowledged' })
    }

}
