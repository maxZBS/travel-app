import Head from 'next/head'
import { useRouter } from 'next/router'
import { FC } from 'react'
import { onlyText } from './clearText'

interface IMeta {
	title: string
	description?: string
	image?: string
}

const Meta: FC<IMeta> = ({ title, description, image }) => {
	const { asPath } = useRouter()
	const currentUrl = `${process.env.APP_URL}${asPath}`

	title = `${title} | Travel App`

	return (
		<Head>
			<title itemProp="headline">{title}</title>
			{description ? (
				<>
					<meta
						itemProp="description"
						name="description"
						content={onlyText(description, 152)}
					/>
					<link rel="canonical" href={currentUrl} />
					<meta property="og:locale" content="en" />
					<meta property="og:title" content={title} />
					<meta property="og:url" content={currentUrl} />
					<meta property="og:image" content={image || '/logo.jpg'} />
					<meta property="og:site_name" content="Travel App" />
					<meta
						property="og:description"
						content={onlyText(description, 197)}
					/>
				</>
			) : (
				<meta name="robots" content="noindex, nofollow" />
			)}
		</Head>
	)
}

export default Meta
