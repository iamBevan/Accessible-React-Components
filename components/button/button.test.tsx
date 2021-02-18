import React from "react"
import { render, RenderResult } from "@testing-library/react"
import "@testing-library/jest-dom/extend-expect"
import { Button } from "./button"

function getComponent(): RenderResult {
	return render(<Button title={"Kevin"} />)
}

test("loads and displays button", async () => {
	const component = getComponent()
	const btn = component.getByTestId("button")

	expect(btn).toBeInTheDocument()
})
