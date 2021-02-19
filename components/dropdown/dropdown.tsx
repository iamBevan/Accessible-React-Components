import React, { useEffect, useState } from "react"
import styles from "./dropdown.module.scss"
import { Item } from "../../pages/index"

interface DropdownProps {
	label: string
	items: Item[]
	selectedItem?: Item
}

const Dropdown: React.FC<DropdownProps> = ({ label, items, selectedItem }) => {
	const [isOpen, setIsOpen] = useState(false)
	const [selected, setSelected] = useState<Item>()

	useEffect(() => {
		/**
		 * Check to see if there is a selected item described in the props. Set the first
		 * item as the selected item if not.
		 */
		if (selectedItem) {
			setSelected(selectedItem)
		} else {
			setSelected(items[0])
		}
	}, [])

	const List = (): JSX.Element => (
		<ul
			className={[
				[styles["listbox"]],
				[isOpen ? styles["hidden"] : ""],
			].join(" ")}
			role='listbox'
		>
			{items.map((item, i) => (
				<li
					role='option'
					aria-selected={selected === item}
					key={i}
					onClick={() => {
						setSelected(item)
						setIsOpen(false)
					}}
				>
					{item.name}
				</li>
			))}
		</ul>
	)

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
					{selected?.name}
				</button>
				<List />
			</div>
		</div>
	)
}

export { Dropdown }
