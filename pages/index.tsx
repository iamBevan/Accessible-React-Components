import Head from "next/head"
import { useState } from "react"
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
	{ name: "Dingo", id: "dingo" },
	{ name: "Fruit Bat", id: "fruitbat" },
	{ name: "Ostritch", id: "ostritch" },
	{ name: "Eel", id: "eel" },
	{ name: "Kestral", id: "kestral" },
	{ name: "Spider", id: "spider" },
]

export default function Home() {
	const [selected, setSelected] = useState<Item>(items[3])

	const handleSelected = (item: Item) => {
		setSelected(item)
	}

	return (
		<div className={styles.container}>
			<Head>
				<title>Create Next App</title>
				<link rel='icon' href='/favicon.ico' />
			</Head>

			<main className={styles.main}>
				<button>Focusable Button</button>
				<Dropdown
					label='Test Title'
					items={items}
					selectedItem={selected}
					changeSelected={handleSelected}
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
