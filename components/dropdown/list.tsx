import React, { useEffect, useState, useRef } from "react"
import { Key } from "../../helpers/keyCodes"
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

		const handleArrows = (event: KeyboardEvent): void => {
			if (inFocus >= 0) {
				if (
					event.code === Key.ArrowDown &&
					inFocus < items.length - 1
				) {
					event.preventDefault()
					if (liRefs.current) {
						liRefs.current[inFocus + 1]?.scrollIntoView({
							behavior: "smooth",
							block: "nearest",
						})
					}
					setInFocus(inFocus + 1)
					handleSelection(items[inFocus + 1])
				}

				if (event.code === Key.ArrowUp && inFocus > 0) {
					event.preventDefault()

					if (liRefs.current) {
						liRefs.current[inFocus - 1]?.scrollIntoView({
							behavior: "smooth",
							block: "nearest",
						})
					}
					setInFocus(inFocus - 1)
					handleSelection(items[inFocus - 1])
				}

				if (event.code === Key.Enter) {
					handleSelection(items[inFocus])
					onClose(false)
				}

				if (event.code === Key.Escape) {
					onClose(false)
				}
			}
		}

		if (isOpen) {
			document.addEventListener("keydown", handleArrows)
		}

		return () => {
			document.removeEventListener("keydown", handleArrows)
		}
	}, [handleSelection, inFocus, isOpen, items, onClose])

	const onSelect = (item: Item, i: number): void => {
		handleSelection(item)
		setInFocus(i)
		onClose(false)
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
