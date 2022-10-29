import { FC, MouseEvent } from 'react'
import Link from 'next/link'
import { IPlace } from '@/types/place'
import styles from './PopularPlaces.module.scss'

import { urlFor } from '../../../../sanity'
import { MdDeleteOutline } from 'react-icons/md'

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
					<button aria-label="Remove from favorites" onClick={removeHandler}>
						<MdDeleteOutline size={26} />
					</button>
				)}
			</a>
		</Link>
	)
}

export default PlaceItem
