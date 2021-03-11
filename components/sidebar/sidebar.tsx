/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import Link from "next/link"
import React, { useState } from "react"
import styles from "./sidebar.module.scss"

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const Sidebar = () => {
	const [isSidebarOpen, setIsSidebarOpen] = useState(false)

	// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
	const handleToggle = (
		// eslint-disable-next-line @typescript-eslint/no-unused-vars
		_e: React.MouseEvent<HTMLButtonElement, MouseEvent>
	) => {
		setIsSidebarOpen(!isSidebarOpen)
	}

	return (
		<>
			<div
				className={[
					[styles["sidebar-component"]],
					[isSidebarOpen ? styles["sidebar-component-open"] : ""],
				].join(" ")}
			>
				<div className={styles["heading"]}>
					<h1>
						<Link href='/'>Flamingo</Link>
					</h1>
					<span role='img' aria-label='flamingo'>
						🦩
					</span>
				</div>
				<nav className={styles["nav"]}>
					<ul>
						<li>
							<Link href='/components/dropdown'>Dropdown</Link>
						</li>
						<li>
							<Link href='/components/modal'>Modal</Link>
						</li>
					</ul>
				</nav>
			</div>
			<button
				className={[
					[styles["sidebar-btn"]],
					[isSidebarOpen ? styles["sidebar-btn-open"] : ""],
				].join(" ")}
				onClick={e => handleToggle(e)}
			>
				{isSidebarOpen ? "Close" : "Open"}
			</button>
		</>
	)
}

export { Sidebar }
