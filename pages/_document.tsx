import { Head, Html, Main, NextScript } from 'next/document'

export default function Document() {
	return (
		<Html lang="en">
			<Head>
				<link rel="manifest" href="/manifest.json" />
				<link rel="shortcut icon" href="/favicon.png" type="image/png" />
				<link rel="apple-touch-icon" href="/touch-icons/icon-512x512.png" />
			</Head>
			<body>
				<Main />
				<NextScript />
			</body>
		</Html>
	)
}
