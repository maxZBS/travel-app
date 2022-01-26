import React from 'react'
import { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import { API_URL } from '../../app/constants'
import { IPlace } from '@/types/place'

import Place from '@/screens/place/Place'

interface IPlacePage {
	place: IPlace
}

const PlacePage: NextPage<IPlacePage> = ({ place }) => {
	return <Place place={place} />
}

export const getStaticPaths: GetStaticPaths = async () => {
	const res = await fetch(`${API_URL}/places`)
	const places = await res.json()

	const paths = places.map(post => ({
		params: { slug: post.slug },
	}))

	return { paths, fallback: true }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
	const res = await fetch(`${API_URL}/places/${params.slug}`)
	const place = await res.json()

	return { props: { place } }
}

export default PlacePage
