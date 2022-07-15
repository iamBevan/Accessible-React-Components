import Link, { LinkProps } from "next/link"
import { ReactNode } from "react"
import styles from "./custom-link.module.scss"

const CustomLink = ({
	href,
	children,
}: LinkProps & { children: ReactNode }): JSX.Element => {
	return (
		<Link href={href}>
			<a className={styles["link"]}>{children}</a>
		</Link>
	)
}

export { CustomLink }
