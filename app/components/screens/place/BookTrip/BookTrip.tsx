import React from 'react'
import { AiFillCaretRight } from 'react-icons/ai'

import styles from './BookTrip.module.scss'

const BookTrip = () => {
	const bookTrip = () => {
		console.log('Ok')
	}

	return (
		<button className={styles.button} onClick={bookTrip}>
			<span className={styles.text}>Book a trip</span>
			<span className={styles.icon}>
				<AiFillCaretRight size='18' />
			</span>
		</button>
	)
}

export default BookTrip
