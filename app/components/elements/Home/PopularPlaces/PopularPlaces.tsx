import Link from 'next/link'
import { FC } from 'react'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

import { IPlace } from '@/types/place'
import styles from './PopularPlaces.module.scss'

interface IPopularPlaces {
	places: IPlace[]
	isLoading: boolean
}

const PopularPlaces: FC<IPopularPlaces> = ({ places, isLoading }) => {
	return (
		<div className={styles.wrapper}>
			<h2>Popular places</h2>
			{isLoading ? (
				<div
					style={{
						marginTop: '-2rem',
					}}
				>
					<Skeleton
						count={1}
						height={200}
						borderRadius='20px'
						baseColor='#1b1b1d'
						highlightColor='#2c2c2e'
					/>
				</div>
			) : places.length ? (
				places.map(place => (
					<Link href={`/place/${place.slug}`} key={place.slug}>
						<a
							className={styles.item}
							style={{ backgroundImage: `url(${place.imagePath})` }}
						>
							<span className={styles.heading}>
								{place.location.city + ', ' + place.location.country}
							</span>
						</a>
					</Link>
				))
			) : (
				<div
					style={{
						marginTop: '-2rem',
						color: '#e8e8e8',
						opacity: '.6',
						fontStyle: 'italic',
					}}
				>
					Not found!
				</div>
			)}
		</div>
	)
}

export default PopularPlaces
