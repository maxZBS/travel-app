import { useRouter } from 'next/router'
import styles from './Footer.module.scss'
import { signOut, useSession } from 'next-auth/react'

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
		icon: 'explore',
		link: '/explore'
	},
	{
		icon: 'place',
		link: '/place/kyoto'
	},
	{
		icon: 'person_outline',
		link: '/auth'
	}
]

const Footer = () => {
	const { push, pathname } = useRouter()
	const { data } = useSession()

	return (
		<footer className={styles.footer}>
			<nav>
				{navItems.map(item => (
					<button
						className={pathname === item.link ? styles.active : ''}
						onClick={() => {
							item.link === '/auth' && data ? signOut() : push(item.link)
						}}
						key={item.icon}
					>
						<span className="material-icons-outlined">
							{item.link === '/auth' && data ? 'logout' : item.icon}
						</span>
					</button>
				))}
			</nav>
		</footer>
	)
}

export default Footer
