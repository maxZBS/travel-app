import Favorites from '@/screens/favorites/Favorites'
import { GetStaticProps } from 'next'
import { sanityClient } from '../app/sanity'
import { queries } from '../app/queries'

const FavouritesPage = ({ places }) => {
	return <Favorites places={places} />
}

export const getStaticProps: GetStaticProps = async () => {
	const result = await sanityClient.fetch(queries.getPlaces)

	return {
		props: {
			places: result
		}
	}
}

export default FavouritesPage
