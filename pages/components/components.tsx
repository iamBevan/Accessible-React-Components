import Head from "next/head"
import React, { useState } from "react"
import { Dropdown } from "../../components/dropdown/dropdown"
import { Item } from "../../misc/mockData/interfaces"
import { items } from "../../misc/mockData/mockData"
import styles from "./components.module.scss"

export function Components(): JSX.Element {
	const [, setSelected] = useState<Item>(items[3])

	const handleSelected = (item: Item): void => {
		setSelected(item)
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
						changeSelected={handleSelected}
						label='Dropdown Example'
					/>
				</div>
			</section>
		</div>
	)
}
