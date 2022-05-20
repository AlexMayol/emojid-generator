import type { NextApiRequest, NextApiResponse } from 'next'
import { emojid } from '@midnight-city/emojid'

type Result = {
    id: string
}
export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<Result>
) {
    let length = +req.query.length
    if (!Number(length))
        length = 8
    res.status(200).json({ id: emojid(length) })
}
