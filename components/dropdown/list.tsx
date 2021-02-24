import React, { useEffect, useState } from "react"
import { Item } from "../../pages"

interface ListProps {
	items: Item[]
}

const List: React.FC<ListProps> = ({ items }) => {
	const [count, setCount] = useState(0)

	useEffect(() => {
		const handleKeyPress = (event: KeyboardEvent) => {
			event.preventDefault()

			if (event.key === "ArrowDown" && count < items.length - 1) {
				setCount(count + 1)
			}

			if (event.key === "ArrowUp" && count > 0) {
				setCount(count - 1)
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
					key={i}
					role='option'
					aria-selected={i === count ? true : false}
					style={
						i === count
							? { background: "#949494", color: "#fff" }
							: {}
					}
				>
					{item.name}
				</li>
			))}
		</>
	)

	return (
		<>
			{console.log("count", count)}
			<Items />
		</>
	)
}

export { List }
