import { ReactNode } from "react"
import Link from "next/link"
import styles from "./layout.module.scss"

interface LayoutProps {
	children: ReactNode
}

const Layout = ({ children }: LayoutProps): JSX.Element => {
	return (
		<div className={styles["container"]}>
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

			<div className={styles["content"]}>{children}</div>
		</div>
	)
}

export { Layout }
