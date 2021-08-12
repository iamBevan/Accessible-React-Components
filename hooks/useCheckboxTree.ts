import { useState } from "react"
import { Item } from "../components/checkbox-group/checkbox-group"

type CheckboxTreeState = [(item: Item) => () => void, Item[]]

const useCheckboxTreeState = (items: Item[]): CheckboxTreeState => {
	const [state, setState] = useState<Item[]>(items)

	const toggleHandler = (item: Item) => () => {
		const findItemIndex = state.indexOf(item)
		let newItems = [...state]

		newItems[findItemIndex].checked = !state[findItemIndex].checked

		setState(newItems)
	}

	return [toggleHandler, state]
}

export { useCheckboxTreeState }
