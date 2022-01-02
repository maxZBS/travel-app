import React, { FC } from 'react'

import styles from './Header.module.scss'
import Favorites from './Favorites'
import BackButton from './BackButton'

const Header: FC = () => {
	return (
		<div className={styles.wrapper}>
			<BackButton />
			<Favorites />
		</div>
	)
}

export default Header
