import React from "react"
import styles from "../styles/pages/components.module.scss"

export default function Components(): JSX.Element {
	return (
		<div className={styles["container"]}>
			<h1>Components</h1>
		</div>
	)
}

export function getStaticProps(): { props: { layout: string } } {
	return {
		props: {
			layout: "components",
		},
	}
}
