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
	 * The button has an accessible label. By default, the accessible name
	 * is computed from any text content inside the button element. However,
	 * it can also be provided with an aria-label.
	 */
	ariaLabel?: string
	/**
	 * When set to true, it specifies that the button should be disabled - button can not receive focus.
	 */
	disabled?: boolean
	/**
	 * Option for providing custom styling object.
	 */
	customStyles?: CSSProperties
	/**
	 * Option to pass a callback function to be called upon by button being pressed.
	 */
	onClick?: () => void
}

const Button: React.FC<ButtonProps> = ({
	text,
	disabled,
	ariaLabel,
	ariaDisabled,
	customStyles,
	onClick,
}) => {
	return (
		<>
			<button
				className={styles["button"]}
				aria-label={ariaLabel ?? undefined}
				aria-disabled={ariaDisabled ?? false}
				disabled={disabled ?? false}
				style={customStyles}
				onClick={onClick}
			>
				{text}
			</button>
		</>
	)
}

export { Button }
