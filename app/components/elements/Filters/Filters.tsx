import { FC } from 'react'
import styles from './Filters.module.scss'

const cities = [
	{
		location: 'Paris',
	},
	{
		location: 'Bora Bora',
	},
	{
		location: 'Maui',
	},
	{
		location: 'Tahiti',
	},
	{
		location: 'Brazil',
	},
	{
		location: 'Norway',
	},
]

const Filters: FC = () => {
	return (
		<div className={styles.wrapper}>
			{cities.map(city => (
				<button key={city.location}>{city.location}</button>
			))}
		</div>
	)
}

export default Filters
