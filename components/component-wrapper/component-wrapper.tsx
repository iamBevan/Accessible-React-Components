import React, { JSXElementConstructor, ReactElement, useState } from "react"
import styles from "./component-wrapper.module.scss"

interface ComponentWrapperProps {
	children: ReactElement<unknown, string | JSXElementConstructor<unknown>>
	checkbox?: {
		label: string
	}
}

const ComponentWrapper: React.FC<ComponentWrapperProps> = ({
	children,
	checkbox,
}) => {
	const [state, setState] = useState(true)

	const toggleState = (): void => {
		setState(!state)
	}
	return (
		<div className={styles["container"]}>
			{checkbox ? (
				React.cloneElement(children, {
					checked: state,
					setChecked: toggleState,
				})
			) : (
				<div>{children}</div>
			)}
		</div>
	)
}

export { ComponentWrapper }
