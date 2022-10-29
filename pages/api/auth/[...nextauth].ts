import NextAuth, { NextAuthOptions } from 'next-auth'
import { SanityAdapter, SanityCredentials } from 'next-auth-sanity'
import { sanityClientServer } from '../../../app/sanity.server'

const options: NextAuthOptions = {
	// @ts-ignore
	providers: [SanityCredentials(sanityClientServer)],
	session: {
		strategy: 'jwt'
	},
	secret: 'any-secret-word',
	// @ts-ignore
	adapter: SanityAdapter(sanityClientServer)
}

export default NextAuth(options)
