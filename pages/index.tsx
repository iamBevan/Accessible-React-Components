import Head from "next/head"
import { Dropdown } from "../components/dropdown/dropdown"
import styles from "../styles/Home.module.css"

export interface Item {
	name: string
	id: string
}

const items: Item[] = [
	{ name: "Raptor", id: "raptor" },
	{ name: "Mouse", id: "mouse" },
	{ name: "Ox", id: "ox" },
	{ name: "Elk", id: "elk" },
	{ name: "Monkey", id: "monkey" },
	{ name: "Owl", id: "owl" },
	{ name: "Crab", id: "crab" },
	{ name: "Otter", id: "otter" },
]

export default function Home() {
	return (
		<div className={styles.container}>
			<Head>
				<title>Create Next App</title>
				<link rel='icon' href='/favicon.ico' />
			</Head>

			<main className={styles.main}>
				<h1 className={styles.title}>
					Welcome to <a href='https://nextjs.org'>Next.js!</a>
				</h1>
				<Dropdown
					label='Test Title'
					items={items}
					selectedItem={items[6]}
				/>
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
