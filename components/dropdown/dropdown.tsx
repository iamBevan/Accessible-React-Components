import React, { useEffect, useState, useRef } from "react"
import styles from "./dropdown.module.scss"
import { List } from "./list"
import { Arrow } from "../arrow/arrow"
import { Item } from "../../misc/mockData/interfaces"
import { useClickAway } from "react-use"

interface DropdownProps {
	label: string
	items: Item[]
	/**
	 * Optionally set initial item
	 */
	selectedItem?: Item
	changeSelected: (item: Item) => void
}

const Dropdown: React.FC<DropdownProps> = ({
	label,
	items,
	selectedItem,
	changeSelected,
}) => {
	const [isOpen, setIsOpen] = useState(false)
	const listRef = useRef<HTMLUListElement>(null)
	const btnRef = useRef<HTMLButtonElement>(null)
	const wrapperRef = useRef<HTMLDivElement>(null)

	const handleIsOpen = (open: boolean): void => {
		setIsOpen(open)
	}

	useClickAway(listRef, () => {
		handleIsOpen(false)
	})

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

	useEffect(() => {
		const returnFocus = (): void => {
			const ref = btnRef.current

			if (ref && isOpen) {
				ref.focus()
			}
		}

		return () => {
			returnFocus()
		}
	}, [isOpen])

	return (
		<div className={styles["container"]}>
			<span id='list-label' className={styles["sr-label"]}>
				{label}
			</span>
			<div className={styles["wrapper"]} ref={wrapperRef}>
				<button
					aria-haspopup='listbox'
					aria-expanded={isOpen}
					aria-labelledby='list-label'
					onClick={() => setIsOpen(isOpen ? false : true)}
					ref={btnRef}
				>
					<span>{selectedItem?.name}</span>
					<div className={styles["arrow"]}>
						<Arrow isOpen={isOpen} />
					</div>
				</button>
				<ul
					className={[
						[styles["listbox"]],
						[isOpen ? styles["hidden"] : ""],
					].join(" ")}
					role='listbox'
					/**
					 * tabIndex will need to be manually set here such that it can be focused
					 */
					tabIndex={-1}
					aria-activedescendant={selectedItem?.id}
					ref={listRef}
				>
					<List
						items={items}
						changeSelected={changeSelected}
						selectedItem={selectedItem}
						handleIsOpen={handleIsOpen}
						isOpen={isOpen}
					/>
				</ul>
			</div>
		</div>
	)
}

export { Dropdown }
