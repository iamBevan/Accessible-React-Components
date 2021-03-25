import React from "react"
import styles from "./button.module.scss"

interface ButtonProps {
	text: string
}

const Button: React.FC<ButtonProps> = ({ text }) => {
	return (
		<div className={styles["container"]}>
			<button>{text}</button>
		</div>
	)
}

export { Button }
