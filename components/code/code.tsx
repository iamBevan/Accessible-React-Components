import React, { ReactNode } from "react"
import styles from "./code.module.scss"
import SyntaxHighlighter from "react-syntax-highlighter"
import { codeStyle } from "../../misc"

interface CodeProps {
	code: ReactNode
	language?: string
	fontSize?: number
	lineHeight?: number
	basic?: {
		hasBorder: boolean
		hasColor: boolean
	}
}

const Code: React.FC<CodeProps> = ({
	code,
	language = "text",
	fontSize,
	lineHeight,
	basic,
}) => {
	const basicStyles = [""]
	if (basic?.hasBorder) basicStyles.push(styles["border"])
	if (basic?.hasColor) basicStyles.push(styles["colored"])

	return basic ? (
		<code className={basicStyles.join(" ")}>{code}</code>
	) : (
		<SyntaxHighlighter
			language={language}
			style={codeStyle}
			codeTagProps={{
				style: {
					fontSize: fontSize ?? 16,
					lineHeight: lineHeight ?? 1.4,
				},
			}}
		>
			{code}
		</SyntaxHighlighter>
	)
}

export { Code }
