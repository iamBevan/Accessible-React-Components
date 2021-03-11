export default function Modal(): JSX.Element {
	return <>Modal</>
}

export function getStaticProps(): { props: { layout: string } } {
	return {
		props: {
			layout: "components",
		},
	}
}
