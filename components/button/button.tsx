import React from "react"
import styles from "./button.module.scss"

interface ButtonProps {
	isOpen: boolean
}

const Button: React.FC<ButtonProps> = () => {
	return (
		<div className={styles["container"]}>
			<button>Button</button>
		</div>
	)
}

export { Button }
