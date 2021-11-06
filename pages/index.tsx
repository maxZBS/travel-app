import { GetStaticProps, NextPage } from 'next'
import Layout from '../app/components/common/Layout'
import { IPlace } from '../app/types/place'

import HeadingSection from '../app/components/elements/Home/HeadingSection/HeadingSection'
import Search from '../app/components/elements/Search/Search'
import Filters from '../app/components/elements/Filters/Filters'

interface IHome {
	places: IPlace[]
}

const Home: NextPage<IHome> = ({ places }) => {
	return (
		<Layout>
			<HeadingSection />
			<div style={{ width: '80%', margin: '0 auto' }}>
				<Search />
				<Filters />
			</div>
		</Layout>
	)
}

export const getStaticProps: GetStaticProps = async () => {
	const result = await fetch('http://localhost:3000/api/places')
	const places = await result.json()

	return {
		props: {
			places,
		},
	}
}

export default Home
