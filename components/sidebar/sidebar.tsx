/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import Link from "next/link"
import React, { useState, useRef } from "react"
import { ThreeBars } from "../icons"
import SvgCloseIcon from "../icons/icons/CloseIcon"
import styles from "./sidebar.module.scss"
import { useClickAway } from "react-use"

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const Sidebar = () => {
	const [isSidebarOpen, setIsSidebarOpen] = useState(false)

	const sidebarRef = useRef<HTMLDivElement>(null)

	// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
	const handleToggle = (
		// eslint-disable-next-line @typescript-eslint/no-unused-vars
		_e: React.MouseEvent<HTMLButtonElement, MouseEvent>
	) => {
		setIsSidebarOpen(!isSidebarOpen)
	}

	useClickAway(sidebarRef, () => {
		setIsSidebarOpen(false)
	})

	return (
		<>
			<div
				className={[
					[styles["sidebar-component"]],
					[isSidebarOpen ? styles["sidebar-component-open"] : ""],
				].join(" ")}
				ref={sidebarRef}
			>
				<div className={styles["heading"]}>
					<h1>
						<Link href='/'>Flamingo</Link>
					</h1>
					<span role='img' aria-label='flamingo'>
						🦩
					</span>
					<button
						onClick={() => setIsSidebarOpen(false)}
						className={styles["close-btn"]}
						aria-expanded={isSidebarOpen}
					>
						<SvgCloseIcon size={35} color={"#393737"} />
					</button>
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
				className={styles["sidebar-btn"]}
				onClick={e => handleToggle(e)}
				aria-expanded={isSidebarOpen}
			>
				<ThreeBars size={40} color={"#393737"} />
			</button>
		</>
	)
}

export { Sidebar }
