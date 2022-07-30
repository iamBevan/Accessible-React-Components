import React, { ReactNode } from "react"
import styles from "./component-wrapper.module.scss"

interface ComponentWrapperProps {
	children: ReactNode
}

const ComponentWrapper: React.FC<ComponentWrapperProps> = ({ children }) => {
	return <div className={styles["container"]}>{children}</div>
}

export { ComponentWrapper }
