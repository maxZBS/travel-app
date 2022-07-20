import React, { FC } from 'react'
import { TbHeartMinus, TbHeartPlus } from 'react-icons/tb'

import styles from './Header.module.scss'
import { useFavorites } from '@/screens/favorites/useFavorites'

const Favorites: FC<{ _id: string }> = ({ _id }) => {
	const { checkFavorite } = useFavorites()

	return (
		<div className={styles.bookmark}>
			<button onClick={() => {}}>
				<span className={styles.buttonWrapper}>
					{checkFavorite(_id) ? <TbHeartMinus /> : <TbHeartPlus />}
				</span>
			</button>
		</div>
	)
}

export default Favorites
