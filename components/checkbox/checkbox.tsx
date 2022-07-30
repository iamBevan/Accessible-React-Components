import React, { KeyboardEvent } from "react"
import { Key } from "../../helpers/keyCodes"
import styles from "./checkbox.module.scss"

export interface CheckboxProps {
	label: string
	checked: boolean
	setChecked: () => void
}

const Checkbox: React.FC<CheckboxProps> = ({
	label,
	checked,
	setChecked,
}): JSX.Element => {
	const handleClick = (event: KeyboardEvent): void => {
		if (event.code === Key.Space) {
			event.preventDefault()
			setChecked()
		}
	}

	return (
		<div
			role='checkbox'
			aria-checked={checked}
			tabIndex={0}
			data-testid='checkbox'
			className={styles["checkbox"]}
			onClick={setChecked}
			onKeyDown={handleClick}
		>
			{label}
		</div>
	)
}

export { Checkbox }
