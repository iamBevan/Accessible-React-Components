export default function Dropdown(): JSX.Element {
	return <>Dropdown</>
}

export function getStaticProps(): { props: { layout: string } } {
	return {
		props: {
			layout: "components",
		},
	}
}
