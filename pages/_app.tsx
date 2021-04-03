import { Fragment } from "react"
import { Layout } from "../components/layout/layout"
import { AppProps } from "next/app"
import { MDXProvider } from "@mdx-js/react"
import "../styles/globals.scss"

const mdComponents = {
	h1: (props: { children: string }) => (
		<>
			<h1 style={{ color: "tomato" }} {...props} />
		</>
	),
}

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
	const Container = pageProps.layout === "components" ? Layout : Fragment

	return (
		<Container>
			<MDXProvider components={mdComponents}>
				<Component {...pageProps} />
			</MDXProvider>
		</Container>
	)
}

export default MyApp
