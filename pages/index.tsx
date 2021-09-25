import { GetStaticProps, NextPage } from 'next'
import Layout from '../app/components/common/Layout'
import { IPlace } from '../app/types/place'

import SearchSection from '../app/components/elements/Home/SearchSection/SearchSection'

interface IHome {
	places: IPlace[]
}

const Home: NextPage<IHome> = ({ places }) => {
	return (
		<Layout>
			<SearchSection />
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
