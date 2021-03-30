import React from "react"
import { Item } from "../../misc/interfaces"
import { List } from "./list"

interface CheckboxProps {
	legend: string
	items: Item[]
}

const Checkbox: React.FC<CheckboxProps> = ({ legend, items }) => {
	return (
		<div>
			<fieldset>
				<legend>{legend}</legend>
				<div></div>
				<ul>
					<List items={items} />
				</ul>
			</fieldset>
		</div>
	)
}

export { Checkbox }
