import { FC, useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { signUp } from 'next-auth-sanity/client'
import { signIn } from 'next-auth/react'
import { toast } from 'react-toastify'
import { CgProfile } from 'react-icons/cg'

import { IAuthFields } from './auth.interface'
import Layout from '@/components/common/Layout'

import styles from './Auth.module.scss'
import stylesButton from '../place/BookTrip/BookTrip.module.scss'
import { useRouter } from 'next/router'

const Auth: FC = () => {
	const [typeForm, setTypeForm] = useState<'login' | 'register'>('login')

	const {
		handleSubmit,
		register,
		formState: { errors }
	} = useForm<IAuthFields>({
		mode: 'onChange'
	})

	const isReg = typeForm === 'register'

	const { push } = useRouter()

	const onSubmit: SubmitHandler<IAuthFields> = async data => {
		if (isReg) {
			await signUp(data)
		} else {
			const response = await signIn('sanity-login', {
				redirect: false,
				...data
			})
			if (response.error) {
				toast.error(response.error)
				return
			}

			await push('/')
		}
	}

	return (
		<Layout>
			<h1 className="h1">Auth/{isReg ? 'Register' : 'login'}</h1>
			<form onSubmit={handleSubmit(onSubmit)}>
				<div className={styles.wrapper}>
					<input
						{...register('email', { required: 'Email is invalid!' })}
						type="text"
						placeholder="E-mail"
						className={styles.input}
					/>
					{errors.email && (
						<div className={styles.error}>{errors.email.message}</div>
					)}
				</div>
				<div className={styles.wrapper}>
					<input
						{...register('password', { required: 'Password is invalid!' })}
						type="password"
						placeholder="Password"
						className={styles.input}
					/>
					{errors.password && (
						<div className={styles.error}>{errors.password.message}</div>
					)}
				</div>
				<button
					aria-label={isReg ? 'Register' : 'Login'}
					className={stylesButton.button}
					type="submit"
				>
					<span className={stylesButton.text}>
						{isReg ? 'Register' : 'Login'}
					</span>
					<span className={stylesButton.icon}>
						<CgProfile size="18" />
					</span>
				</button>
			</form>
			<div className={styles.changeType}>
				<button
					aria-label={`I want ${isReg ? 'login' : 'register'}`}
					onClick={() => setTypeForm(isReg ? 'login' : 'register')}
				>
					I want {isReg ? 'login' : 'register'}
				</button>
			</div>
		</Layout>
	)
}

export default Auth
