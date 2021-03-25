/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import Link from "next/link"
import React, { useState, useEffect, useRef } from "react"
import { ThreeBars } from "../icons"
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

	useEffect(() => {
		let focusableElements = document.querySelectorAll<HTMLAnchorElement>(
			"a[href]"
		)
		let firstTabStop = focusableElements[0]
		let lastTabStop = focusableElements[focusableElements.length - 1]

		if (isSidebarOpen) {
			focusableElements: Array.prototype.slice.call([focusableElements])
			firstTabStop.focus()

			const handleTabKey = (event: KeyboardEvent) => {
				if (event.key === "Tab") {
					if (event.shiftKey) {
						if (document.activeElement === firstTabStop) {
							event.preventDefault()
							lastTabStop.focus()
						}
					} else {
						if (document.activeElement === lastTabStop) {
							event.preventDefault()
							firstTabStop.focus()
						}
					}
				}
			}

			const handleEscapeKey = (event: KeyboardEvent) => {
				if (event.key === "Escape") {
					setIsSidebarOpen(!isSidebarOpen)
				}
			}

			document.addEventListener("keydown", handleTabKey)
			document.addEventListener("keydown", handleEscapeKey)
		}
	}, [isSidebarOpen])

	return (
		<>
			<div
				className={[
					[styles["sidebar-component"]],
					[isSidebarOpen ? styles["sidebar-component-open"] : ""],
				].join(" ")}
				ref={sidebarRef}
				aria-label='sidebar'
			>
				<div className={styles["heading"]}>
					<h1>
						<Link href='/'>Flamingo</Link>
					</h1>
					<span role='img' aria-label='flamingo'>
						🦩
					</span>
				</div>
				<div className={styles["nav-container"]}>
					<nav className={styles["nav"]}>
						<ul>
							<li>
								<Link href='/components/button'>Button</Link>
							</li>
							<li>
								<Link href='/components/checkbox'>
									Checkbox
								</Link>
							</li>
							<li>
								<Link href='/components/checkbox'>Switch</Link>
							</li>
							<li>
								<Link href='/components/slider'>Slider</Link>
							</li>
							<li>
								<Link href='/components/dropdown'>
									Dropdown
								</Link>
							</li>
							<li>
								<Link href='/components/accordion'>
									Accordion
								</Link>
							</li>
							<li>
								<Link href='/components/modal'>Modal</Link>
							</li>
							<li>
								<Link href='/components/tooltip'>Tooltip</Link>
							</li>
							<li>
								<Link href='/components/tabs'>Tabs</Link>
							</li>
							<li>
								<Link href='/components/datetimepicker'>
									Date/Time Picker
								</Link>
							</li>
						</ul>
					</nav>
				</div>
			</div>
			<button
				className={styles["sidebar-btn"]}
				onClick={e => handleToggle(e)}
				aria-expanded={isSidebarOpen}
			>
				<ThreeBars size={15} color={"#393737"} />
			</button>
		</>
	)
}

export { Sidebar }
