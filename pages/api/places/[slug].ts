import { NextApiRequest, NextApiResponse } from 'next'

import { places } from './index'

export default function handler(req: NextApiRequest, res: NextApiResponse) {
	res.status(200).json(places.find(p => p.slug === req.query.slug))
}
