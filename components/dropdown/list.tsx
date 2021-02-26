import React, { useEffect, useState, useRef, MutableRefObject } from "react"
import useClickAway from "../../hooks/useClickAway"
import { Item } from "../../pages"

interface ListProps {
	items: Item[]
	selectedItem: Item
	changeSelected: (item: Item) => void
	handleIsOpen: (isOpen: boolean) => void
	isOpen: boolean
	outerRef: MutableRefObject<HTMLUListElement>
}

const List: React.FC<ListProps> = ({
	items,
	changeSelected,
	selectedItem,
	handleIsOpen,
	isOpen,
	outerRef,
}) => {
	const getSelectedItemIndex = items.findIndex(item => item === selectedItem)
	const [count, setCount] = useState<number>(getSelectedItemIndex)
	const liRefs = useRef<(HTMLLIElement | null)[]>([])
	useClickAway(outerRef, () => {
		handleIsOpen(false)
	})

	useEffect(() => {
		liRefs.current = liRefs.current.slice(0, items.length)
	}, [items.length])

	useEffect(() => {
		changeSelected(items[count])
	}, [count])

	useEffect(() => {
		if (!isOpen) {
			return
		}

		const handleKeyPress = (event: KeyboardEvent) => {
			if (count >= 0) {
				if (event.key === "ArrowDown" && count < items.length - 1) {
					event.preventDefault()
					setCount(count + 1)
					if (liRefs.current) {
						liRefs.current[count + 1]?.scrollIntoView({
							behavior: "smooth",
							block: "nearest",
						})
					}
				}

				if (event.key === "ArrowUp" && count > 0) {
					event.preventDefault()
					setCount(count - 1)

					if (liRefs.current) {
						liRefs.current[count - 1]?.scrollIntoView({
							behavior: "smooth",
							block: "nearest",
						})
					}
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
	}, [count, items.length, isOpen])

	const Items = (): JSX.Element => (
		<>
			{items.map((item, i) => (
				<li
					id={item.id}
					key={i}
					role='option'
					aria-selected={i === count ? true : false}
					ref={element => (liRefs.current[i] = element)}
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
