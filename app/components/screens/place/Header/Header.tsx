import { FC, memo } from 'react'

import styles from './Header.module.scss'
import Favorites from './Favorites'
import BackButton from './BackButton'
import { useSession } from 'next-auth/react'

const Header: FC<{ _id: string }> = ({ _id }) => {
	const { data } = useSession()

	return (
		<div className={styles.wrapper}>
			<BackButton />
			{data && <Favorites _id={_id} />}
		</div>
	)
}

export default memo(Header)
