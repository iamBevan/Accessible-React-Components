import Head from "next/head"
import styles from "../styles/home.module.scss"

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
					<a href='/components'>Components</a>
					<a href='/blog'>Blog</a>
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
