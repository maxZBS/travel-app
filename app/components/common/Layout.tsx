import { FC } from 'react'
import Footer from './footer/Footer'
import { useSession } from 'next-auth/react'

const Layout: FC<{ isMaxWidth?: boolean }> = ({
	isMaxWidth = true,
	children
}) => {
	const { data } = useSession()

	return (
		<div>
			<div style={{ maxWidth: isMaxWidth && 480, margin: '0 auto' }}>
				{children}
			</div>

			{!!data && <Footer />}
		</div>
	)
}

export default Layout
