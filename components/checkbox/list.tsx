import React from "react"
import { Item } from "../../misc/interfaces"

interface ListProps {
	items: Item[]
	selectedItem?: Item
}

const List: React.FC<ListProps> = ({ items }) => {
	const Items = (): JSX.Element => (
		<>
			{items.map((item, i) => (
				<li key={i}>
					<label htmlFor='checkbox'>{item.name}</label>
					<input type='checkbox' id='checkbox' />
				</li>
			))}
		</>
	)

	return <Items />
}

export { List }
