import React, { useEffect, useState, useRef } from "react"
import { Item } from "../../pages"

interface ListProps {
	items: Item[]
	selectedItem?: Item
	changeSelected: (item: Item) => void
	handleIsOpen: (isOpen: boolean) => void
	isOpen: boolean
}

const List: React.FC<ListProps> = ({
	items,
	changeSelected,
	selectedItem,
	handleIsOpen,
	isOpen,
}) => {
	const getSelectedItemIndex = selectedItem
		? items.findIndex(item => item === selectedItem)
		: 0
	const [count, setCount] = useState<number>(getSelectedItemIndex)
	const liRefs = useRef<(HTMLLIElement | null)[]>([])

	useEffect(() => {
		liRefs.current = liRefs.current.slice(0, items.length)
	}, [items.length])

	useEffect(() => {
		changeSelected(items[count])
	}, [changeSelected, count, items])

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
					handleIsOpen(false)
				}
			}
		}

		if (isOpen) {
			document.addEventListener("keydown", handleKeyPress)
		}

		return () => {
			document.removeEventListener("keydown", handleKeyPress)
		}
	}, [count, items.length, isOpen, handleIsOpen])

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
						changeSelected(item)
						handleIsOpen(false)
						setCount(i)
					}}
					onKeyPress={(e: React.KeyboardEvent<HTMLLIElement>) => {
						if (e.key === "Enter") {
							changeSelected(item)
							handleIsOpen(false)
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
