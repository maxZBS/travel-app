import { ClientConfig, createClient, createPreviewSubscriptionHook } from 'next-sanity'

import { PortableText as PortableTextComponent } from '@portabletext/react'
import createImageUrlBuilder from '@sanity/image-url'

export const config:ClientConfig = {
	projectId: 'exug0mn7',
	dataset: 'production',
	token: process.env.SANITY_API_TOKEN,
	apiVersion: '2021-10-21',
	useCdn: false
}

export const sanityClient = createClient(config)

export const usePreviewSubscription = createPreviewSubscriptionHook(config)
export const urlFor = source => createImageUrlBuilder(config).image(source)
export const PortableText = props => (
	<PortableTextComponent components={{}} {...props} />
)

// https://github.com/Fedeya/next-auth-sanity/blob/98e2b9e74a6cb43ff477674f6acdad0d207a7e68/src/credentials.ts
