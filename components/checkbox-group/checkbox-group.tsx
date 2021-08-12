import { useCheckboxTreeState } from "../../hooks/useCheckboxTree"
import { Checkbox, CheckboxProps } from "../checkbox/checkbox"
import styles from "./checkbox-group.module.scss"

export type Item = Omit<CheckboxProps, "setChecked">

interface CheckboxGroupProps {
	legend: string
	items: Item[]
}

const CheckboxGroup: React.FC<CheckboxGroupProps> = ({
	items,
	legend,
}): JSX.Element => {
	const [toggleChecked, checkboxes] = useCheckboxTreeState(items)

	return (
		<div className={styles["container"]}>
			<fieldset>
				<legend>{legend}</legend>
				<div className={styles["checkboxes"]}>
					{checkboxes.map(item => (
						<Checkbox
							key={item.label}
							label={item.label}
							checked={item.checked}
							setChecked={toggleChecked(item)}
						/>
					))}
				</div>
			</fieldset>
		</div>
	)
}

export { CheckboxGroup }
