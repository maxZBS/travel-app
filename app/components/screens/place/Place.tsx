import React, { FC } from 'react'
import { IPlace } from '@/types/place'
import Layout from '@/common/Layout'
import BookTrip from './BookTrip/BookTrip'
import Header from './Header/Header'
import Information from './Information/Information'
import Wrapper from './Wrapper/Wrapper'
import Meta from 'utils/Meta'

import { urlFor } from '../../../sanity'

interface IPlacePage {
	place: IPlace
}

const Place: FC<IPlacePage> = ({ place }) => {
	return (
		<Layout isMaxWidth={false}>
			<Meta
				title={`${place.location.city} - ${place.location.country}`}
				description={`Best route for traveling - ${place.location.city}`}
				image={urlFor(place.imagePath).url()}
			/>
			<Wrapper imagePath={urlFor(place.imagePath).url()}>
				<Header />
				<Information place={place} />
				<BookTrip />
			</Wrapper>
		</Layout>
	)
}

export default Place
