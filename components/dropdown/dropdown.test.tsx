import { fireEvent, render, RenderResult } from "@testing-library/react"
import { items } from "../../misc/mockData/mockData"
import { Dropdown, DropdownProps } from "./dropdown"

function getComponent(props: DropdownProps): RenderResult {
	return render(<Dropdown {...props} />)
}

describe("Dropdown", () => {
	const onChange = jest.fn()
	let component: RenderResult

	beforeEach(() => {
		component = getComponent({
			onChange: onChange,
			items: items,
			label: "Cool Label",
		})
	})

	it("renders without crashing", () => {
		const dropdown = component.getByTestId("dropdown")
		expect(dropdown).toBeInTheDocument()
	})

	it("should have the correct label", () => {
		const button = component.getByRole("button", {
			name: "Cool Label Raptor",
		})
		expect(button).toBeInTheDocument()
	})

	it("should be closed", () => {
		const list = component.getByRole("listbox")

		expect(list).not.toHaveClass("visible")
		expect(list).toHaveAttribute("tabIndex", "0")
	})

	it("should open the list", () => {
		const button = component.getByRole("button", {
			name: "Cool Label Raptor",
		})

		fireEvent.click(button)
		const list = component.getByRole("listbox")

		expect(list).toHaveClass("listbox visible")
		expect(list).toHaveAttribute("tabIndex", "-1")
	})

	it("should highlight the first item", () => {
		const listItem = component.getByRole("option", { name: "Raptor" })

		expect(listItem).toHaveAttribute("aria-selected", "true")
	})

	describe("when an item is selected", () => {
		beforeEach(async () => {
			const button = component.getByRole("button", {
				name: "Cool Label Raptor",
			})

			fireEvent.click(button)
			const kestralItem = await component.findByRole("option", {
				name: "Kestral",
			})

			fireEvent.click(kestralItem)
		})

		it("should call onChange", () => {
			expect(onChange).toHaveBeenCalledTimes(1)
		})

		it("should update button when clicked", async () => {
			const button = await component.findByRole("button", {
				name: "Cool Label Kestral",
			})

			expect(button).toBeInTheDocument()
		})

		it("should close the listbox", () => {
			const list = component.getByRole("listbox")

			expect(list).not.toHaveClass("visible")
			expect(list).toHaveAttribute("tabIndex", "0")
		})
	})
})

describe("Dropdown with selectedItem", () => {
	const onChange = jest.fn()
	let component: RenderResult

	beforeEach(() => {
		component = getComponent({
			items: items,
			label: "Cool Label",
			onChange: onChange,
			selectedItem: items[2], // Ox
		})
	})

	it("should have the correct label", () => {
		const button = component.getByRole("button", {
			name: "Cool Label Ox",
		})
		expect(button).toBeInTheDocument()
	})

	describe("when opened", () => {
		it("should highlight the selectedItem", () => {
			const button = component.getByRole("button", {
				name: "Cool Label Ox",
			})

			fireEvent.click(button)
			const listItem = component.getByRole("option", { name: "Ox" })

			expect(listItem).toHaveAttribute("aria-selected", "true")
		})
	})
})

describe("when using keyboard navigation", () => {
	const onChange = jest.fn()
	let component: RenderResult

	beforeEach(() => {
		component = getComponent({
			onChange: onChange,
			items: items,
			label: "Cool Label",
		})
	})

	it("Enter should open list", () => {
		const list = component.getByRole("listbox")
		const button = component.getByRole("button", {
			name: "Cool Label Raptor",
		})

		fireEvent.keyDown(button, {
			key: "Enter",
			code: "Enter",
			keyCode: 13,
			charCode: 13,
		})
		expect(list).toHaveClass("listbox visible")
		expect(list).toHaveAttribute("tabIndex", "-1")
	})

	it("should highlight the first item", () => {
		const listItem = component.getByRole("option", { name: "Raptor" })

		expect(listItem).toHaveAttribute("aria-selected", "true")
	})

	describe("when list is open", () => {
		beforeEach(() => {
			const button = component.getByRole("button", {
				name: "Cool Label Raptor",
			})

			fireEvent.keyDown(button, {
				key: "Enter",
				code: "Enter",
				keyCode: 13,
				charCode: 13,
			})
		})
	})
})
