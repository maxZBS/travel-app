import React, { FC } from 'react'
import { TbHeartMinus, TbHeartPlus } from 'react-icons/tb'

import styles from './Header.module.scss'

const isAdded = false

const Favorites: FC = () => {
	return (
		<div className={styles.bookmark}>
			<button onClick={() => {}}>
				<span className={styles.buttonWrapper}>
					{isAdded ? <TbHeartMinus /> : <TbHeartPlus />}
				</span>
			</button>
		</div>
	)
}

export default Favorites
