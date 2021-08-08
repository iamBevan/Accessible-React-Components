import { fireEvent, render, RenderResult } from "@testing-library/react"
import { Checkbox, CheckboxProps } from "./checkbox"

function getComponent(props: CheckboxProps): RenderResult {
	return render(<Checkbox {...props} />)
}

describe("Checkbox", () => {
	const onChange = jest.fn()
	let component: RenderResult

	beforeEach(() => {
		component = getComponent({
			setChecked: onChange,
			checked: false,
			label: "Cool Label",
		})
	})

	it("renders without crashing", () => {
		const checkbox = component.getByTestId("checkbox")
		expect(checkbox).toBeInTheDocument()
	})

	it("has the correct role", () => {
		const checkbox = component.getByRole("checkbox", {
			name: /cool label/i,
		})
		expect(checkbox).toBeInTheDocument()
	})
})

describe("ARIA", () => {
	const onChange = jest.fn()
	let component: RenderResult

	beforeEach(() => {
		component = getComponent({
			setChecked: onChange,
			checked: false,
			label: "Cool Label",
		})

		it("is not checked", () => {
			const checkbox = component.getByTestId("checkbox")

			expect(checkbox).toHaveAttribute("aria-checked", "false")
		})

		it("is checked once toggled", () => {
			const checkbox = component.getByTestId("checkbox")

			fireEvent.click(checkbox)

			expect(checkbox).toHaveAttribute("aria-checked", "true")
		})
	})
})
