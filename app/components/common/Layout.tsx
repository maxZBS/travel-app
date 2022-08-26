import { FC, PropsWithChildren } from 'react'
import Footer from './footer/Footer'

const Layout: FC<PropsWithChildren<{ isMaxWidth?: boolean }>> = ({
	isMaxWidth = true,
	children
}) => {
	return (
		<div>
			<div style={{ maxWidth: isMaxWidth ? 480 : null, margin: '0 auto' }}>
				{children}
			</div>

			<Footer />
		</div>
	)
}

export default Layout
