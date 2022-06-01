import NextProgressBar from 'nextjs-progressbar'
import { ToastContainer } from 'react-toastify'

import 'react-toastify/dist/ReactToastify.css'
import '@/assets/styles/globals.scss'
import { SessionProvider } from 'next-auth/react'

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
	return (
		<>
			<NextProgressBar
				color="#eb601e"
				startPosition={0.3}
				stopDelayMs={200}
				height={3}
			/>
			<SessionProvider session={session}>
				<Component {...pageProps} />
				<ToastContainer theme="dark" draggable={false} />
			</SessionProvider>
		</>
	)
}

export default MyApp
