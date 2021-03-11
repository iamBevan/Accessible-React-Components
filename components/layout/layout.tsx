import { ReactNode } from "react"
import { useMedia } from "react-use"
import Link from "next/link"
import styles from "./layout.module.scss"
import { Sidebar } from "../sidebar/sidebar"

interface LayoutProps {
	children: ReactNode
}

const Layout = ({ children }: LayoutProps): JSX.Element => {
	const isWide = useMedia("(min-width: 600px)")

	return (
		<>
			{isWide ? (
				<div className={styles["container"]}>
					<div className={styles["sidebar"]}>
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
									<Link href='/components/dropdown'>
										Dropdown
									</Link>
								</li>
								<li>
									<Link href='/components/modal'>Modal</Link>
								</li>
							</ul>
						</nav>
					</div>
					<div className={styles["content"]}>{children}</div>
				</div>
			) : (
				<div className={styles["container"]}>
					<Sidebar />
					<div className={styles["content"]}>{children}</div>
				</div>
			)}
		</>
	)
}

export { Layout }
