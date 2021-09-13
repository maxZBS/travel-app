import { NextApiRequest, NextApiResponse } from 'next'
import { IPlace } from '../../app/types/place'
import japanImg from '../../assets/images/japan.jpg'

const places: IPlace[] = [
	{
		slug: 'tokyo',
		description: 'wefwewegewwefew',
		imagePath: japanImg.src,
		location: 'Japan',
		rating: 5,
		duration: '10 days',
		distance: 10453,
		googleMapLink: 'wefewf',
		mapImage: 'egfw',
	},
]

export default function handler(req: NextApiRequest, res: NextApiResponse) {
	res.status(200).json(places)
}
