import React, { FC } from 'react'
import { TbHeartMinus, TbHeartPlus } from 'react-icons/tb'

import styles from './Header.module.scss'
import { useFavorites } from '@/screens/favorites/useFavorites'

const Favorites: FC<{ _id: string }> = ({ _id }) => {
	const { checkFavorite, toggleFavorite, isLoading } = useFavorites(_id)

	return (
		<div className={styles.bookmark}>
			<button onClick={toggleFavorite} disabled={isLoading}>
				<span className={styles.buttonWrapper}>
					{checkFavorite(_id) ? <TbHeartMinus /> : <TbHeartPlus />}
				</span>
			</button>
		</div>
	)
}

export default Favorites
