import React, { useEffect, useState, createRef, useRef } from "react"
import styles from "./dropdown.module.scss"
import { Item } from "../../pages"
import { useDisableKeyboardScroll } from "../../hooks/useDisableKeyboardScroll"
import { List } from "./list"

interface DropdownProps {
	label: string
	items: Item[]
	/**
	 * Optionally set initial item
	 */
	selectedItem?: Item
}

const Dropdown: React.FC<DropdownProps> = ({ label, items, selectedItem }) => {
	const [isOpen, setIsOpen] = useState(false)
	// const [selected, setSelected] = useState<Item>()
	const listRef = createRef<HTMLUListElement>()
	// const listRefs = useRef<(HTMLButtonElement | null)[]>([])

	// useDisableKeyboardScroll(isOpen)

	// useEffect(() => {
	// 	listRefs.current = listRefs.current.slice(0, items.length)
	// }, [])

	// useEffect(() => {
	// 	/**
	// 	 * Check to see if there is a selected item described in the props. Set the first
	// 	 * item as the selected item if not.
	// 	 */
	// 	if (selectedItem) {
	// 		setSelected(selectedItem)
	// 	} else {
	// 		setSelected(items[0])
	// 	}
	// }, [])

	useEffect(() => {
		const ref = listRef.current
		/**
		 * Check that the ref is not null (defined when the UL is present in the DOM)
		 * and that the isOpen === true
		 */
		if (ref && isOpen) {
			/**
			 * As the list opens and both conditions are met, shift focus from the button to the UL.
			 * tabIndex will need to be manually set to zero for this to be possible
			 */
			ref.focus()
		}
	}, [isOpen])

	// useEffect(() => {
	// 	/**
	// 	 * This useEffect will run every time isOpen changes - so when it's close we want it to
	// 	 * bail out at this point and to none of the following
	// 	 */

	// 	const handleKeyUp = (event: KeyboardEvent) => {
	// 		if (!isOpen) {
	// 			return
	// 		}
	// 		event.preventDefault()
	// 		event.stopPropagation()

	// 		const getSelectedItemIndex = items.findIndex(
	// 			item => item === selected
	// 		)

	// 		if (event.key === "Escape") {
	// 			// event.preventDefault()
	// 			setIsOpen(false)
	// 		}
	// 		if (
	// 			event.key === "ArrowDown" &&
	// 			getSelectedItemIndex < items.length - 1
	// 		) {
	// 			const getSelectedItemIndex = items.findIndex(
	// 				item => item === selected
	// 			)
	// 			setSelected(items[getSelectedItemIndex + 1])
	// 		}

	// 		if (event.key === "ArrowUp" && getSelectedItemIndex > 0) {
	// 			setSelected(items[getSelectedItemIndex - 1])
	// 		}
	// 	}

	// 	/**
	// 	 * We haven't bailed out, so the list is open and we attack an event listener
	// 	 */
	// 	document.addEventListener("keyup", handleKeyUp)

	// 	return () => {
	// 		/**
	// 		 * Remove event listener when the box closes; which will cause this all to run
	// 		 * again, but it will bail out at the first check.
	// 		 */
	// 		document.removeEventListener("keyup", handleKeyUp)
	// 	}
	// }, [selected, isOpen])

	return (
		<div className={styles["container"]}>
			<span id='list-label'>{label}</span>
			<div className={styles["wrapper"]}>
				<button
					aria-haspopup='listbox'
					aria-expanded={isOpen}
					aria-labelledby='list-label'
					onClick={() => setIsOpen(!isOpen)}
				>
					{/* {selected?.name} */}
					Cat
				</button>
				<ul
					className={[
						[styles["listbox"]],
						[isOpen ? styles["hidden"] : ""],
					].join(" ")}
					role='listbox'
					ref={listRef}
					/**
					 * tabIndex will need to be manually set here such that it can be focused
					 */
					tabIndex={-1}
				>
					<List items={items} />
				</ul>
			</div>
		</div>
	)
}

export { Dropdown }
