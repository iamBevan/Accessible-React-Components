import { MDXProviderComponents } from "@mdx-js/react"
import { Heading } from "../components/heading/heading"
import { CustomLink } from "../components/custom-link/custom-link"

const H1 = ({ children }: { children: string }): JSX.Element => (
	<>
		<Heading text={children} type='h1' />
	</>
)
const H2 = ({ children }: { children: string }): JSX.Element => (
	<>
		<Heading text={children} type='h2' />
	</>
)
const H3 = ({ children }: { children: string }): JSX.Element => (
	<>
		<Heading text={children} type='h3' />
	</>
)
const H4 = ({ children }: { children: string }): JSX.Element => (
	<>
		<Heading text={children} type='h4' />
	</>
)
const H5 = ({ children }: { children: string }): JSX.Element => (
	<>
		<Heading text={children} type='h5' />
	</>
)
const H6 = ({ children }: { children: string }): JSX.Element => (
	<>
		<Heading text={children} type='h6' />
	</>
)

const Link = ({
	href,
	children,
}: {
	href: string
	children: string
}): JSX.Element => {
	return (
		<>
			<CustomLink href={href}>{children}</CustomLink>
		</>
	)
}

const MDXComponents: MDXProviderComponents = {
	h1: H1,
	h2: H2,
	h3: H3,
	h4: H4,
	h5: H5,
	h6: H6,
	a: Link,
}

export default MDXComponents
