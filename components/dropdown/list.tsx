import React, { useEffect, useState } from "react"
import { Item } from "../../pages"

interface ListProps {
	items: Item[]
	selectedItem: Item
	changeSelected: (item: Item) => void
}

const List: React.FC<ListProps> = ({ items, changeSelected, selectedItem }) => {
	const getSelectedItemIndex = items.findIndex(item => item === selectedItem)
	const [count, setCount] = useState<number>(getSelectedItemIndex)

	const props = {
		items,
		changeSelected,
		selectedItem,
	}

	useEffect(() => {
		changeSelected(items[count])
	}, [count])

	useEffect(() => {
		const handleKeyPress = (event: KeyboardEvent) => {
			event.preventDefault()

			if (count >= 0) {
				if (event.key === "ArrowDown" && count < items.length - 1) {
					setCount(count + 1)
				}

				if (event.key === "ArrowUp" && count > 0) {
					setCount(count - 1)
				}
			}
		}

		document.addEventListener("keydown", handleKeyPress)

		return () => {
			document.removeEventListener("keydown", handleKeyPress)
		}
	}, [count, items.length])

	const Items = (): JSX.Element => (
		<>
			{items.map((item, i) => (
				<li
					id={item.id}
					key={i}
					role='option'
					aria-selected={i === count ? true : false}
				>
					{item.name}
				</li>
			))}
		</>
	)

	return (
		<>
			{console.log("count", count)}
			{console.log("selected", selectedItem)}
			{console.log("props", props)}

			<Items />
		</>
	)
}

export { List }
