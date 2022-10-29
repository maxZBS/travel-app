import { ChangeEvent, FC, memo, useState } from 'react'
import { TypeSetState } from '@/types/common'
import { IPlace } from '@/types/place'
import styles from './Search.module.scss'
import { MdSearch } from 'react-icons/md'

interface ISearch {
	setPlaces: TypeSetState<IPlace[]>
	initialPlaces: IPlace[]
	setIsLoading: TypeSetState<boolean>
}

const Search: FC<ISearch> = ({ setPlaces, initialPlaces, setIsLoading }) => {
	const [searchTerm, setSearchTerm] = useState('')

	const searchHandler = (e: ChangeEvent<HTMLInputElement>) => {
		setIsLoading(true)
		const value = e.target.value
		setSearchTerm(value)

		setTimeout(() => {
			if (value)
				setPlaces(
					initialPlaces.filter(
						place =>
							place.location.city.toLowerCase().includes(value) ||
							place.location.country.toLowerCase().includes(value)
					)
				)
			else setPlaces(initialPlaces)
			setIsLoading(false)
		}, 1500)
	}

	return (
		<div className={styles.search}>
			<MdSearch />
			<input
				type="text"
				onChange={searchHandler}
				value={searchTerm}
				placeholder="Search place..."
			/>
		</div>
	)
}

export default memo(Search)
