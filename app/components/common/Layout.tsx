import { FC } from 'react'
import Footer from './footer/Footer'

const Layout: FC = props => {
	return (
		<div>
			<div>{props.children}</div>

			<Footer />
		</div>
	)
}

export default Layout
