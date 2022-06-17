import { useRouter } from 'next/router'
import styles from './Footer.module.scss'
import { signOut, useSession } from 'next-auth/react'
import Link from 'next/link'

type TypeNavItem = {
	icon: string
	link: string
}

const navItems: TypeNavItem[] = [
	{
		icon: 'home',
		link: '/'
	},
	{
		icon: 'favorite_outline',
		link: '/favorites'
	},
	{
		icon: 'account_circle',
		link: '/profile'
	},
	{
		icon: 'logout',
		link: '/auth'
	}
]

const Footer = () => {
	const { push, pathname } = useRouter()
	const { data } = useSession()

	if (pathname === '/auth') return null

	return (
		<footer className={styles.footer}>
			<nav>
				{data ? (
					navItems.map(item => (
						<button
							className={pathname === item.link ? styles.active : ''}
							onClick={async () => {
								item.link === '/auth' ? await signOut() : await push(item.link)
							}}
							key={item.icon}
						>
							<span className="material-icons-outlined">{item.icon}</span>
						</button>
					))
				) : (
					<Link href="/auth">
						<a className={styles['go-to-login']}>Go to login</a>
					</Link>
				)}
			</nav>
		</footer>
	)
}

export default Footer
