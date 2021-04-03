import { Fragment } from "react"
import { Layout } from "../components/layout/layout"
import { AppProps } from "next/app"
import { MDXProvider } from "@mdx-js/react"
import "../styles/globals.scss"
import MDXComponents from "../helpers/MDXComponents"

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
	const Container = pageProps.layout === "components" ? Layout : Fragment

	return (
		<Container>
			<MDXProvider components={MDXComponents}>
				<Component {...pageProps} />
			</MDXProvider>
		</Container>
	)
}

export default MyApp
