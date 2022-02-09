import Head from 'next/head'
import { FC } from 'react'

interface IMeta {
	title: string
	description?: string
}

const Meta: FC<IMeta> = ({ title, description }) => {
	return (
		<Head>
			<title itemProp='headline'>{titleMerge(title)}</title>
			{description ? (
				<>
					<meta
						itemProp='description'
						name='description'
						content={onlyText(description, 152)}
					/>
					<link rel='canonical' href={currentUrl} />
					<meta property='og:locale' content='en' />
					<meta property='og:title' content={titleMerge(title)} />
					<meta property='og:url' content={currentUrl} />
					<meta property='og:image' content={image || logoImage} />
					<meta property='og:site_name' content={siteName} />
					<meta
						property='og:description'
						content={onlyText(description, 197)}
					/>
				</>
			) : (
				<meta name='robots' content='noindex, nofollow' />
			)}
		</Head>
	)
}

export default Meta
