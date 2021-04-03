const H1 = (props: { children: string }): JSX.Element => (
	<>
		<h1 style={{ color: "tomato" }} {...props} />
	</>
)

const MDXComponents = {
	h1: H1,
}

export default MDXComponents
