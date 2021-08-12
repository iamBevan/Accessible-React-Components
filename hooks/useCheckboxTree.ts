import { useState } from "react"
import { Item } from "../components/checkbox-group/checkbox-group"

type CheckboxTreeState = [(item: Item) => () => void, Item[]]

const useCheckboxTreeState = (items: Item[]): CheckboxTreeState => {
	const [checkboxes, setState] = useState(items)

	const toggleChecked = (item: Item) => () => {
		const findItemIndex = checkboxes.indexOf(item)
		let newItems = [...checkboxes]

		newItems[findItemIndex].checked = !checkboxes[findItemIndex].checked

		setState(newItems)
	}

	return [toggleChecked, checkboxes]
}

export { useCheckboxTreeState }
