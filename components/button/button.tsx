import React, { CSSProperties } from "react"
import styles from "./button.module.scss"

interface ButtonProps {
	/**
	 * Text displayed on the button
	 */
	text: string
	/**
	 * When an action associated with the button is unavailable, the button
	 * has aria-disabled set to true - button can still be focused (see disabled prop).
	 */
	ariaDisabled?: boolean
	/**
	 * When set to true, it specifies that the button should be disabled - button can not receive focus.
	 */
	disabled?: boolean
	/**
	 * The button has an accessible label. By default, the accessible name
	 * is computed from any text content inside the button element. However,
	 * it can also be provided with an aria-label.
	 */
	ariaLabel?: string
	/**
	 * Option for providing custom styling object.
	 */
	customStyles?: CSSProperties
}

const Button: React.FC<ButtonProps> = ({
	text,
	disabled,
	ariaLabel,
	ariaDisabled,
	customStyles,
}) => {
	return (
		<>
			<button
				className={styles["button"]}
				aria-label={ariaLabel ?? undefined}
				aria-disabled={ariaDisabled ?? false}
				disabled={disabled ?? false}
				style={customStyles}
			>
				{text}
			</button>
		</>
	)
}

export { Button }
