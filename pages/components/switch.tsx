import styles from "../../styles/pages/components.module.scss"

export default function Switch(): JSX.Element {
	return (
		<main className={styles["main"]}>
			<h1>Switch</h1>
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
