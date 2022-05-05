import Layout from '@/components/common/Layout'
import { FC } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { CgProfile } from 'react-icons/cg'
import { IAuthFields } from './auth.interface'

import styles from './Auth.module.scss'
import stylesButton from '../place/BookTrip/BookTrip.module.scss'

const Auth: FC = () => {
	const {
		handleSubmit,
		register,
		formState: { errors }
	} = useForm<IAuthFields>({
		mode: 'onChange'
	})

	const onSubmit: SubmitHandler<IAuthFields> = data => {}

	return (
		<Layout>
			<h1 className={styles.h1}>Auth/register</h1>
			<form onSubmit={handleSubmit(onSubmit)}>
				<div className={styles.wrapper}>
					<input
						{...register('email', { required: 'Email is invalid!' })}
						type="text"
						placeholder="E-mail"
						className={styles.input}
					/>
					{errors.email && <div className={styles.error}>{errors.email}</div>}
				</div>
				<div className={styles.wrapper}>
					<input
						{...register('password', { required: 'Password is invalid!' })}
						type="password"
						placeholder="Password"
						className={styles.input}
					/>
					{errors.password && (
						<div className={styles.error}>{errors.password}</div>
					)}
				</div>
				<button className={stylesButton.button}>
					<span className={stylesButton.text}>Auth</span>
					<span className={stylesButton.icon}>
						<CgProfile size="18" />
					</span>
				</button>
			</form>
		</Layout>
	)
}

export default Auth
