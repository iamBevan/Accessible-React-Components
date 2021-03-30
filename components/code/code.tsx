import React, { ReactNode } from "react"
// import styles from "./code.module.scss"
import SyntaxHighlighter from "react-syntax-highlighter"
import { codeStyle } from "../../misc"

interface CodeProps {
	snippet: ReactNode
	language?: string
	fontSize?: number
	lineHeight?: number
}

const Code: React.FC<CodeProps> = ({
	snippet,
	language,
	fontSize,
	lineHeight,
}) => {
	return (
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
			{snippet}
		</SyntaxHighlighter>
	)
}

export { Code }
