import React, { FC } from 'react'
import { IPlace } from '../../../types/place'
import Layout from '../../common/Layout'
import BookTrip from './BookTrip/BookTrip'
import Information from './Information/Information'

interface IPlacePage {
	place: IPlace
}

const Place: FC<IPlacePage> = ({ place }) => {
	return (
		<Layout>
			<Information place={place} />
			<BookTrip />
		</Layout>
	)
}

export default Place
