import React, { FC } from 'react'
import { IPlace } from '@/types/place'
import Layout from '@/common/Layout'
import BookTrip from './BookTrip/BookTrip'
import Header from './Header/Header'
import Information from './Information/Information'
import Meta from 'utils/Meta'

import { urlFor } from '../../../sanity'
import Image from 'next/image'

import styles from './Place.module.scss'

interface IPlacePage {
	place: IPlace
}

const Place: FC<IPlacePage> = ({ place }) => {
	return (
		<Layout>
			<Meta
				title={`${place.location.city} - ${place.location.country}`}
				description={`Best route for traveling - ${place.location.city}`}
				image={urlFor(place.imagePath).url()}
			/>
			<div>
				<Header _id={place._id} />
				<div className={styles.image}>
					<Image
						src={urlFor(place.imagePath).url()}
						width={346}
						height={218}
						layout="responsive"
						alt={`${place.location.city} - ${place.location.country}`}
						priority
					/>
				</div>
				<Information place={place} />
				<BookTrip />
			</div>
		</Layout>
	)
}

export default Place
