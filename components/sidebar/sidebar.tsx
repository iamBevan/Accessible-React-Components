/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import Link from "next/link"
import React, { useState, useRef } from "react"
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
					{/* <button
						onClick={() => setIsSidebarOpen(false)}
						className={styles["close-btn"]}
						aria-expanded={isSidebarOpen}
					>
						<SvgCloseIcon size={25} color={"#393737"} />
					</button> */}
				</div>
				<div className={styles["nav-container"]}>
					<h2>Components</h2>
					<nav className={styles["nav"]}>
						<ul>
							<li>
								<Link
									aria-label='menuitem'
									href='/components/dropdown'
								>
									Dropdown
								</Link>
							</li>
							<li>
								<Link
									aria-label='menuitem'
									href='/components/modal'
								>
									Modal
								</Link>
							</li>
							<li>
								<Link
									aria-label='menuitem'
									href='/components/modal'
								>
									Modal
								</Link>
							</li>
							<li>
								<Link
									aria-label='menuitem'
									href='/components/modal'
								>
									Modal
								</Link>
							</li>
							<li>
								<Link
									aria-label='menuitem'
									href='/components/modal'
								>
									Modal
								</Link>
							</li>
							<li>
								<Link
									aria-label='menuitem'
									href='/components/modal'
								>
									Modal
								</Link>
							</li>
							<li>
								<Link
									aria-label='menuitem'
									href='/components/modal'
								>
									Modal
								</Link>
							</li>
							<li>
								<Link
									aria-label='menuitem'
									href='/components/modal'
								>
									Modal
								</Link>
							</li>
							<li>
								<Link
									aria-label='menuitem'
									href='/components/modal'
								>
									Modal
								</Link>
							</li>
							<li>
								<Link
									aria-label='menuitem'
									href='/components/modal'
								>
									Modal
								</Link>
							</li>
							<li>
								<Link
									aria-label='menuitem'
									href='/components/modal'
								>
									Modal
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
