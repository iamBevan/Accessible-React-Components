import { Dropdown } from "../../components/dropdown/dropdown"
import { Item } from "../../misc/interfaces"
import { items } from "../../misc/mockData/mockData"
import styles from "../../styles/pages/components.module.scss"

export default function DropdownPage(): JSX.Element {
	const onChange = (item: Item): void => {
		// eslint-disable-next-line no-console
		console.log(item)
	}

	return (
		<main className={styles["main"]}>
			<h2>Dropdown</h2>
			<div className={styles["dropdown"]}>
				<Dropdown
					items={items}
					onChange={onChange}
					label='Dropdown Example'
				/>
			</div>
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
