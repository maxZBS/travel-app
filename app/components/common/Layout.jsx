import Footer from './footer/Footer'

const Layout = props => {
	return (
		<div>
			<div>{props.children}</div>

			<Footer />
		</div>
	)
}

export default Layout
