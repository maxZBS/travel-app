import { FC } from 'react'
import { FaCalendar, FaMapMarkerAlt, FaStar } from 'react-icons/fa'

import { IPlace } from '@/types/place'
import styles from './Information.module.scss'
import Map from './Map'

const Information: FC<{ place: IPlace }> = ({ place }) => {
	return (
		<div className={styles.wrapper}>
			<div className={styles.heading}>
				<FaMapMarkerAlt color='#e8e8e8' size={20} />
				<h1>{place.location.city + ', ' + place.location.country}</h1>
			</div>

			<p>{place.description}</p>

			<div className={styles.additional}>
				<div className={styles.rating}>
					<FaStar color='#FDAE32' size={18} className={styles.star} />
					<span>{place.rating}/10</span>
				</div>

				<div className={styles.duration}>
					<FaCalendar color='#565658' size={18} className={styles.calendar} />
					<span>{place.duration}</span>
				</div>
			</div>

			<Map location={place.location} />
		</div>
	)
}

export default Information
