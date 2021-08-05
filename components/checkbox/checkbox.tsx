import React from "react"

interface CheckboxProps {
	label: string
	checked: boolean
}

const Checkbox: React.FC<CheckboxProps> = ({ label, checked }) => {
	return (
		<div role='checkbox' aria-checked={checked} tabIndex={0}>
			{label}
		</div>
	)
}

export { Checkbox }
