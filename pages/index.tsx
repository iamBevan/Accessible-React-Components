import Head from "next/head"
import styles from "../styles/pages/home.module.scss"
import Link from "next/link"

export default function Home(): JSX.Element {
	return (
		<div className={styles.container}>
			<Head>
				<title>Create Next App</title>
				<link rel='icon' href='/favicon.ico' />
			</Head>

			<main className={styles.main}>
				<h1 className={styles["title"]}>
					<span>Accessible </span>
					React Components
				</h1>
				<div className={styles["buttons"]}>
					<Link href='/components'>Components</Link>
					<Link href='/blog'>Blog</Link>
				</div>
			</main>

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
