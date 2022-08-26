import NextProgressBar from 'nextjs-progressbar'
import { ToastContainer } from 'react-toastify'

import 'react-toastify/dist/ReactToastify.css'
import '@/assets/styles/globals.scss'
import { SessionProvider } from 'next-auth/react'
import AuthProvider from '../app/providers/AuthProvider/AuthProvider'

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
	return (
		<>
			<NextProgressBar
				color="#eb601e"
				startPosition={0.3}
				stopDelayMs={200}
				height={3}
				showOnShallow={false}
				nonce="my-nonce"
				options={{ easing: 'ease', speed: 500 }}
			/>
			<SessionProvider session={session}>
				<AuthProvider Component={Component}>
					<Component {...pageProps} />
					<ToastContainer theme="dark" draggable={false} />
				</AuthProvider>
			</SessionProvider>
		</>
	)
}

export default MyApp
