import NextProgressBar from 'nextjs-progressbar'
import { ToastContainer } from 'react-toastify'

import 'react-toastify/dist/ReactToastify.css'
import '@/assets/styles/globals.scss'

function MyApp({ Component, pageProps }) {
	return (
		<>
			<NextProgressBar
				color="#eb601e"
				startPosition={0.3}
				stopDelayMs={200}
				height={3}
			/>
			<Component {...pageProps} />
			<ToastContainer theme="dark" draggable={false} />
		</>
	)
}

export default MyApp
