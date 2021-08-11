import styles from "../styles/pages/home.module.scss"
import Link from "next/link"
import { CheckboxGroup } from "../components/checkbox-group/checkbox-group"

export default function Home(): JSX.Element {
	return (
		<div className={styles.container}>
			<main className={styles.main}>
				<h1 className={styles["title"]}>
					Flamingo
					<span role='img' aria-label='flamingo'>
						🦩
					</span>
				</h1>
				<h2 className={styles["description"]}>
					A React
					<span> Accessibility </span>
					Project
				</h2>
				<div className={styles["buttons"]}>
					<Link href='/components'>Components</Link>
					<Link href='/blog'>Blog</Link>
				</div>
			</main>

			<CheckboxGroup
				legend={"Legend"}
				items={[
					{
						label: "CHECKBOX 1",
						checked: true,
						// setChecked: () => console.log("1 checked"),
					},
					{
						label: "CHECKBOX 2",
						checked: false,
						// setChecked: () => console.log("2 checked"),
					},
				]}
			/>

			<footer className={styles.footer}>
				<a
					href='https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app'
					target='_blank'
					rel='noopener noreferrer'
				>
					Powered by{" "}
					<img
						src='/vercel.svg'
						alt='Vercel Logo'
						className={styles.logo}
					/>
				</a>
			</footer>
		</div>
	)
}
