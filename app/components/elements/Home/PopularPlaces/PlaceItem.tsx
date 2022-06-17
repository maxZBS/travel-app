import { FC, MouseEvent } from 'react'
import Link from 'next/link'
import { IPlace } from '@/types/place'
import styles from './PopularPlaces.module.scss'

import { urlFor } from '../../../../sanity'

const PlaceItem: FC<{
	place: IPlace
	removeHandler?: (e: MouseEvent<HTMLButtonElement>) => void
}> = ({ place, removeHandler }) => {
	return (
		<Link href={`/place/${place.slug.current}`} key={place._id}>
			<a
				className={styles.item}
				style={{
					backgroundImage: `url(${urlFor(place.imagePath).url()})`
				}}
			>
				<span className={styles.heading}>
					{place.location.city + ', ' + place.location.country}
				</span>
				{removeHandler && (
					<button onClick={removeHandler}>
						<span className="material-icons-outlined">delete</span>
					</button>
				)}
			</a>
		</Link>
	)
}

export default PlaceItem
