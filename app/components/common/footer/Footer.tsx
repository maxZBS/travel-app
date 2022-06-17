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

	if (pathname === '/auth') return null

	return (
		<footer className={styles.footer}>
			<nav>
				{data ? (
					navItems.map(item => (
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
