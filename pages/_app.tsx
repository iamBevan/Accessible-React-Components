import { Fragment } from "react"
import { Layout } from "../components/layout/layout"
import { AppProps } from "next/app"
import "../styles/globals.scss"

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
	const Container = pageProps.layout === "components" ? Layout : Fragment

	return (
		<Container>
			<Component {...pageProps} />
		</Container>
	)
}

export default MyApp
