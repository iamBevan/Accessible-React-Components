import Head from "next/head"
import React from "react"
import { Dropdown } from "../components/dropdown/dropdown"
import { Item } from "../misc/mockData/interfaces"
import { items } from "../misc/mockData/mockData"
import styles from "../styles/pages/components.module.scss"

export default function Components(): JSX.Element {
	const onChange = (item: Item): void => {
		// eslint-disable-next-line no-console
		console.log(item)
	}

	return (
		<div className={styles["container"]}>
			<Head>
				<title>Components</title>
			</Head>
			<h1>Components</h1>
			<section>
				<h2>Dropdown</h2>
				<div className={styles["dropdown"]}>
					<Dropdown
						items={items}
						onChange={onChange}
						label='Dropdown Example'
					/>
				</div>
			</section>
		</div>
	)
}
