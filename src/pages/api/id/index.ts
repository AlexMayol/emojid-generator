import type { NextApiRequest, NextApiResponse } from 'next'
import { emojid } from '@midnight-city/emojid'

type Result = {
    id: string
}
export default function handler(
    _: NextApiRequest,
    res: NextApiResponse<Result>
) {
    res.status(200).json({ id: emojid(8) })
}
