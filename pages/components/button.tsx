import { Button as ButtonComponent } from "../../components/button/button"
import styles from "../../styles/pages/components.module.scss"
import { codeSnippets, codeStyle } from "../../misc"
import SyntaxHighlighter from "react-syntax-highlighter"
import { ComponentWrapper } from "../../components/component-wrapper/component-wrapper"

export default function Button(): JSX.Element {
	return (
		<main className={styles["main"]}>
			<h1>Button</h1>
			<p>
				A button that enables users to trigger an action or event, such
				as submitting a form, opening a dialog, canceling an action, or
				performing a delete operation. It follows{" "}
				<a
					href='https://www.w3.org/TR/wai-aria-practices/#button'
					target='_blank'
					rel='noreferrer'
				>
					WAI-ARIA Authoring Practices 1.1
				</a>
			</p>
			<h2>Installation</h2>
			<SyntaxHighlighter language='javascript' style={codeStyle}>
				npm i flamingo/Button
			</SyntaxHighlighter>
			<h2>Usage</h2>
			<ComponentWrapper>
				<ButtonComponent text='Button' />
			</ComponentWrapper>
			<SyntaxHighlighter
				language='javascript'
				style={codeStyle}
				codeTagProps={{ style: { fontSize: 16 } }}
			>
				{codeSnippets.Button}
			</SyntaxHighlighter>
			<h2>Accessibility</h2>
			<h2>Props</h2>
		</main>
	)
}

export function getStaticProps(): { props: { layout: string } } {
	return {
		props: {
			layout: "components",
		},
	}
}
