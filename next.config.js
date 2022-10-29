const withPWA = require('next-pwa')({
	dest: 'public'
})

const STUDIO_REWRITE = {
	source: '/studio/:path*',
	destination:
		process.env.NODE_ENV === 'development'
			? 'http://localhost:3333/studio/:path*'
			: '/travelapp/index.html'
}

module.exports = withPWA({
	swcMinify: true,
	reactStrictMode: true,
	env: {
		APP_URL: 'http://localhost:3000'
	},
	rewrites: () => [STUDIO_REWRITE],
	images: {
		domains: ['cdn.sanity.io']
	}
})
