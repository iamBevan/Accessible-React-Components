import Link, { LinkProps } from "next/link"
import styles from "./custom-link.module.scss"

const CustomLink: React.FC<LinkProps> = ({ href, children }) => {
	return (
		<Link href={href}>
			<a className={styles["link"]}>{children}</a>
		</Link>
	)
}

export { CustomLink }
