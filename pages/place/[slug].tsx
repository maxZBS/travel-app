import React from 'react'
import { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import { IPlace } from '@/types/place'

import Place from '@/screens/place/Place'
import { sanityClient } from '../../app/sanity'
import { queries } from 'queries'

interface IPlacePage {
	place: IPlace
}

const PlacePage: NextPage<IPlacePage> = ({ place }) => {
	return <Place place={place} />
}

export const getStaticPaths: GetStaticPaths = async () => {
	const result = await sanityClient.fetch(`${queries.getPlaces}{slug}`)

	const paths = result.map(place => ({
		params: { slug: place.slug.current }
	}))

	return { paths, fallback: 'blocking' }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
	const place = await sanityClient.fetch(queries.getPlace(String(params.slug)))

	return { props: { place } }
}

export default PlacePage
