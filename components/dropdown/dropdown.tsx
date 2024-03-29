import React, { useEffect, useState, useRef, KeyboardEvent } from "react"
import styles from "./dropdown.module.scss"
import { List } from "./list"
import { Arrow } from "../arrow/arrow"
import { Item } from "../../misc/interfaces"
import { useClickAway } from "react-use"
import { Key } from "../../helpers/keyCodes"

export interface DropdownProps {
	label: string
	items: Item[]
	/**
	 * Optionally set initial item
	 */
	selectedItem?: Item
	onChange: (item: Item) => void
}

const Dropdown: React.FC<DropdownProps> = ({
	label,
	items,
	selectedItem,
	onChange,
}) => {
	const [selected, setSelected] = useState<Item>(selectedItem ?? items[0])
	const [isOpen, setIsOpen] = useState(false)
	const listRef = useRef<HTMLUListElement>(null)
	const btnRef = useRef<HTMLButtonElement>(null)
	const wrapperRef = useRef<HTMLDivElement>(null)

	const handleIsOpen = (open: boolean): void => {
		setIsOpen(open)
	}

	const handleKeyPress = (e: KeyboardEvent<HTMLButtonElement>): void => {
		if (e.code === Key.Enter || e.code === Key.Space) {
			e.preventDefault()
			setIsOpen(!isOpen)
		}
	}

	const onSelect = (item: Item): void => {
		setSelected(item)
		onChange(item)
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
		<div className={styles["container"]} data-testid='dropdown'>
			<span id='label' className={styles["sr-label"]}>
				{label}
			</span>
			<div className={styles["wrapper"]} ref={wrapperRef}>
				<button
					aria-haspopup='listbox'
					aria-labelledby={`label ${selected.name}`}
					onClick={() => setIsOpen(!isOpen)}
					ref={btnRef}
					id={selected.name}
					onKeyDown={e => handleKeyPress(e)}
				>
					<span>{selected.name}</span>
					<div className={styles["arrow"]}>
						<Arrow isOpen={isOpen} />
					</div>
				</button>
				<ul
					className={[
						[styles["listbox"]],
						[isOpen ? styles["visible"] : ""],
					].join(" ")}
					/**
					 * tabIndex will need to be manually set here such that it can be focused
					 */
					tabIndex={isOpen ? -1 : 0}
					role='listbox'
					aria-labelledby='label'
					aria-activedescendant={selected.id}
					ref={listRef}
				>
					<List
						items={items}
						handleSelection={onSelect}
						selectedItem={selected}
						onClose={handleIsOpen}
						isOpen={isOpen}
					/>
				</ul>
			</div>
		</div>
	)
}

export { Dropdown }
