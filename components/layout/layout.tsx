import { ReactNode } from "react"
import Link from "next/link"
import styles from "./layout.module.scss"

interface LayoutProps {
	children: ReactNode
}

const Layout = ({ children }: LayoutProps): JSX.Element => {
	return (
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
							<Link href='/components/button'>Button</Link>
						</li>
						<li>
							<Link href='/components/checkbox'>Checkbox</Link>
						</li>
						<li>
							<Link href='/components/switch'>Switch</Link>
						</li>
						<li>
							<Link href='/components/slider'>Slider</Link>
						</li>
						<li>
							<Link href='/components/dropdown'>Dropdown</Link>
						</li>
						<li>
							<Link href='/components/accordion'>Accordion</Link>
						</li>
						<li>
							<Link href='/components/modal'>Dialog (Modal)</Link>
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

			<div className={styles["content"]}>{children}</div>
		</div>
	)
}

export { Layout }
