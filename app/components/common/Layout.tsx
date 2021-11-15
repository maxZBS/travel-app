import { FC } from 'react'
import Footer from './footer/Footer'

const Layout: FC = props => {
	return (
		<div>
			<div style={{ maxWidth: 480, margin: '0 auto' }}>{props.children}</div>

			<Footer />
		</div>
	)
}

export default Layout
