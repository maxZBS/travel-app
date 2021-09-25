import { FC } from 'react'
import Filters from '../../Filters/Filters'
import Search from '../../Search/Search'
import styles from './SearchSection.module.scss'

import mapImg from '../../../../../assets/images/map.png'

const SearchSection: FC = () => {
	return (
		<section
			className={styles.section}
			style={{ backgroundImage: `url('${mapImg.src}')` }}
		>
			<div>
				<h1>best places for trip</h1>
				<Search />
				<Filters />
			</div>
		</section>
	)
}

export default SearchSection
