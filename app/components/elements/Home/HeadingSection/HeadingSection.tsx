import { FC, memo } from 'react'
import styles from './HeadingSection.module.scss'

import mapImg from '@/assets/images/map.png'
import Image from 'next/image'

const HeadingSection: FC = () => {
	return (
		<section className={styles.section}>
			<div className={styles.bg}>
				<Image
					src={mapImg.src}
					layout="fill"
					objectPosition="top"
					objectFit="cover"
					alt=""
					priority
				/>
			</div>
			<div>
				<h1>best places for trip</h1>
			</div>
		</section>
	)
}

export default memo(HeadingSection)
