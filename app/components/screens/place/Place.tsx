import React, { FC } from 'react'
import { IPlace } from '../../../types/place'
import Layout from '../../common/Layout'
import BookTrip from './BookTrip/BookTrip'

interface IPlacePage {
	place: IPlace
}

const Place: FC<IPlacePage> = ({ place }) => {
	return (
		<Layout>
			<BookTrip />
		</Layout>
	)
}

export default Place
