import { Fragment } from "react"
import { Layout } from "../components/layout/layout"
import { AppProps } from "next/app"
import { MDXProvider } from "@mdx-js/react"
import "../styles/globals.scss"
import MDXComponents from "../helpers/MDXComponents"
import NextNProgress from "nextjs-progressbar"

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
	const Container = pageProps.layout === "components" ? Layout : Fragment

	return (
		<Container>
			<NextNProgress
				color='var(--focus)'
				startPosition={0.3}
				stopDelayMs={0}
				height={2}
				showOnShallow={false}
			/>
			<MDXProvider components={MDXComponents}>
				<Component {...pageProps} />
			</MDXProvider>
		</Container>
	)
}

export default MyApp
