import React from 'react'

import { useRouter } from 'next/router'
import Layout from '../../app/components/common/Layout'

const Place = () => {
	const {
		query: { slug },
	} = useRouter()

	return <Layout>Place {slug}</Layout>
}

export default Place
