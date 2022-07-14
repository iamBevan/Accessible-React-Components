import React from "react"
import styles from "./tab.module.scss"

interface TabProps {
	tabNames: string[]
	setActive: React.Dispatch<React.SetStateAction<string>>
	active: string
}

const Tab = ({ tabNames, setActive, active }: TabProps): JSX.Element => {
	return (
		<>
			{tabNames.map(tabName => (
				<button
					className={styles.tab}
					onClick={() => setActive(tabName)}
					role='tab'
					aria-selected={active === tabName}
					key={tabName}
				>
					{tabName}
				</button>
			))}
		</>
	)
}

export { Tab }
