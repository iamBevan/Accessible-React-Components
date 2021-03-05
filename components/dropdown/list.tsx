import React, { useEffect, useState, useRef } from "react"
import { Item } from "../../misc/mockData/interfaces"

interface ListProps {
	items: Item[]
	selectedItem: Item
	handleSelection: (item: Item) => void
	onClose: (isOpen: boolean) => void
	isOpen: boolean
}

const List: React.FC<ListProps> = ({
	items,
	handleSelection,
	selectedItem,
	onClose,
	isOpen,
}) => {
	const getSelectedItemIndex = items.findIndex(item => item === selectedItem)

	const [count, setCount] = useState<number>(getSelectedItemIndex)
	const liRefs = useRef<(HTMLLIElement | null)[]>([])

	useEffect(() => {
		liRefs.current = liRefs.current.slice(0, items.length)
	}, [items.length])

	useEffect(() => {
		handleSelection(items[count])
	}, [count, items, handleSelection])

	useEffect(() => {
		if (!isOpen) {
			return
		}

		const handleKeyPress = (event: KeyboardEvent): void => {
			if (count >= 0) {
				if (event.key === "ArrowDown" && count < items.length - 1) {
					event.preventDefault()
					if (liRefs.current) {
						liRefs.current[count + 1]?.scrollIntoView({
							behavior: "smooth",
							block: "nearest",
						})
					}
					setCount(count + 1)
				}

				if (event.key === "ArrowUp" && count > 0) {
					event.preventDefault()

					if (liRefs.current) {
						liRefs.current[count - 1]?.scrollIntoView({
							behavior: "smooth",
							block: "nearest",
						})
					}
					setCount(count - 1)
				}

				if (event.key === "Enter" || event.key === "Escape") {
					onClose(false)
				}
			}
		}

		if (isOpen) {
			document.addEventListener("keydown", handleKeyPress)
		}

		return () => {
			document.removeEventListener("keydown", handleKeyPress)
		}
	}, [count, items.length, isOpen, onClose])

	const onSelect = (item: Item, i: number): void => {
		handleSelection(item)
		onClose(false)
		setCount(i)
	}

	const Items = (): JSX.Element => (
		<>
			{items.map((item, i) => (
				<li
					id={item.id}
					key={i}
					role='option'
					aria-selected={i === count ? true : false}
					ref={element => (liRefs.current[i] = element)}
					onClick={() => {
						onSelect(item, i)
					}}
					onKeyPress={(e: React.KeyboardEvent<HTMLLIElement>) => {
						if (e.key === "Enter") {
							onSelect(item, i)
						}
					}}
				>
					{item.name}
				</li>
			))}
		</>
	)

	return (
		<>
			<Items />
		</>
	)
}

export { List }
