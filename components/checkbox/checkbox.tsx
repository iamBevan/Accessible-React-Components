import React from "react"

export interface CheckboxProps {
	label: string
	checked: boolean
	setChecked: () => void
}

const Checkbox: React.FC<CheckboxProps> = ({ label, checked, setChecked }) => {
	return (
		<div
			role='checkbox'
			aria-checked={checked}
			tabIndex={0}
			onClick={setChecked}
		>
			{label}
		</div>
	)
}

export { Checkbox }
