import { Checkbox } from "../../components/checkbox/checkbox"
import { checkboxItems } from "../../misc/mockData/mockData"
import styles from "../../styles/pages/components.module.scss"

export default function CheckboxPage(): JSX.Element {
	return (
		<main className={styles["main"]}>
			<Checkbox items={checkboxItems} legend='Weapons' />
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
