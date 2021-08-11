import { useCallback, useEffect, useState } from "react"
import { Checkbox, CheckboxProps } from "../checkbox/checkbox"
import styles from "./checkbox-group.module.scss"

type Item = Omit<CheckboxProps, "setChecked">

interface CheckboxGroupProps {
	legend: string
	items: Item[]
}

const CheckboxGroup: React.FC<CheckboxGroupProps> = ({
	items,
	legend,
}): JSX.Element => {
	const [checkedState, setCheckedState] = useState<Item[]>(items)

	const checkboxes = useCallback(() => {
		const toggleHandler = (item: Item) => () => {
			const findItemIndex = checkedState.indexOf(item)

			let newItems = checkedState

			newItems[findItemIndex] = {
				...newItems[findItemIndex],
				checked: false,
			}

			// newItems[findItem].checked = false
			console.log("newItems", newItems)

			setCheckedState(newItems)
		}
		return checkedState.map(item => (
			<Checkbox
				key={item.label}
				label={item.label}
				checked={item.checked}
				setChecked={toggleHandler(item)}
			/>
		))
	}, [checkedState])

	return (
		<div className={styles["container"]}>
			<fieldset>
				<legend>{legend}</legend>
				<div className={styles["checkboxes"]}>
					{checkboxes()}
					{console.log("state", checkedState)}
				</div>
			</fieldset>
		</div>
	)
}
export { CheckboxGroup }
