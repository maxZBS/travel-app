import { FC, useState } from 'react'
import cn from 'classnames'

import styles from './Filters.module.scss'
import { TypeSetState } from '../../../types/common'
import { IPlace } from '../../../types/place'

const countries = [
	{
		location: 'France',
	},
	{
		location: 'Japan',
	},
	{
		location: 'Norway',
	},
	{
		location: 'Italy',
	},
	{
		location: 'Brazil',
	},
	{
		location: 'USA',
	},
]

interface IFilters {
	setPlaces: TypeSetState<IPlace[]>
	initialPlaces: IPlace[]
}

const Filters: FC<IFilters> = ({ setPlaces, initialPlaces }) => {
	const [filter, setFilter] = useState('')

	const handleFilter = (location: string) => {
		if (filter === location) {
			setPlaces(initialPlaces)
			setFilter('')
		} else {
			setPlaces(
				initialPlaces.filter(
					place =>
						place.location.country.toLowerCase() === location.toLowerCase()
				)
			)
			setFilter(location)
		}
	}

	return (
		<div className={styles.wrapper}>
			{countries.map(country => (
				<button
					onClick={() => handleFilter(country.location)}
					key={country.location}
					className={cn({
						[styles.active]: country.location === filter,
					})}
				>
					{country.location}
				</button>
			))}
		</div>
	)
}

export default Filters
