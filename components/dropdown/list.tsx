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

	const [inFocus, setInFocus] = useState<number>(getSelectedItemIndex)
	const liRefs = useRef<(HTMLLIElement | null)[]>([])

	useEffect(() => {
		liRefs.current = liRefs.current.slice(0, items.length)
	}, [items.length])

	useEffect(() => {
		if (!isOpen) {
			return
		}

		const handleKeyPress = (event: KeyboardEvent): void => {
			if (inFocus >= 0) {
				if (event.key === "ArrowDown" && inFocus < items.length - 1) {
					event.preventDefault()
					if (liRefs.current) {
						liRefs.current[inFocus + 1]?.scrollIntoView({
							behavior: "smooth",
							block: "nearest",
						})
					}
					setInFocus(inFocus + 1)
				}

				if (event.key === "ArrowUp" && inFocus > 0) {
					event.preventDefault()

					if (liRefs.current) {
						liRefs.current[inFocus - 1]?.scrollIntoView({
							behavior: "smooth",
							block: "nearest",
						})
					}
					setInFocus(inFocus - 1)
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
	}, [inFocus, items.length, isOpen, onClose])

	const onSelect = (item: Item, i: number): void => {
		handleSelection(item)
		onClose(false)
		setInFocus(i)
	}

	const Items = (): JSX.Element => (
		<>
			{items.map((item, i) => (
				<li
					id={item.id}
					key={i}
					role='option'
					aria-selected={i === inFocus ? true : false}
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
