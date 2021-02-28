import React from "react"
import { ChevronDown } from "../icons"
import styles from "./arrow.module.scss"

interface ArrowProps {
	isOpen: boolean
}

const Arrow: React.FC<ArrowProps> = ({ isOpen }) => {
	return (
		<div
			className={[
				[styles["container"]],
				[isOpen ? styles["open"] : ""],
			].join(" ")}
		>
			<ChevronDown size={80} color={isOpen ? "#db0a5b" : "#919191"} />
		</div>
	)
}

export { Arrow }
