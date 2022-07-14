import React, { useState } from "react"
import { Tab } from "./tab/tab"
import styles from "./tabs.module.scss"

interface TabsProps {
	tabNames: string[]
}

const Tabs = ({ tabNames }: TabsProps): JSX.Element => {
	const [active, setActive] = useState<string>(tabNames[0])

	return (
		<div className={styles.tabs}>
			<Tab tabNames={tabNames} active={active} setActive={setActive} />
		</div>
	)
}

export { Tabs }
