import styles from "../../styles/pages/components.module.scss"

export default function Button(): JSX.Element {
	return (
		<main className={styles["main"]}>
			<h1>Button</h1>
			<p>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
				eiusmod tempor incididunt ut labore et dolore magna aliqua.
				Adipiscing elit duis tristique sollicitudin nibh. A erat nam at
				lectus urna duis.
			</p>
			<h2>Installation</h2>
			<code>npm install flamingo/button</code>
			<h2>Usage</h2>
			<h2>Accessibility</h2>
			<h2>Props</h2>
		</main>
	)
}

export function getStaticProps(): { props: { layout: string } } {
	return {
		props: {
			layout: "components",
		},
	}
}
