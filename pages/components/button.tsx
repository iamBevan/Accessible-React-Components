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
			<SyntaxHighlighter
				language='javascript'
				style={codeStyle}
				codeTagProps={{ style: { fontSize: 16, lineHeight: 1.4 } }}
			>
				npm i flamingo/Button
			</SyntaxHighlighter>
			<h2>Usage</h2>
			<ComponentWrapper>
				<ButtonComponent text='Button' />
			</ComponentWrapper>
			<SyntaxHighlighter
				language='javascript'
				style={codeStyle}
				codeTagProps={{ style: { fontSize: 16, lineHeight: 1.4 } }}
			>
				{codeSnippets.Button}
			</SyntaxHighlighter>
			<h2>Accessibility</h2>
			<p>
				A{" "}
				<a
					href='https://www.w3.org/TR/wai-aria-1.1/#button'
					target='_blank'
					rel='noreferrer'
				>
					button
				</a>{" "}
				is a widget that enables users to trigger an action or event,
				such as submitting a form, opening a dialog, canceling an
				action, or performing a delete operation. A common convention
				for informing users that a button launches a dialog is to append
				"…" (ellipsis) to the button label, e.g., "Save as…".
			</p>
			<p>
				In addition to the ordinary button widget,{" "}
				<abbr title='Accessible Rich Internet Applications'>
					WAI-ARIA
				</abbr>{" "}
				supports 2 other types of buttons:
			</p>
			<ul>
				<li className={styles["li"]}>
					Toggle button: A two-state button that can be either off
					(not pressed) or on (pressed). To tell assistive
					technologies that a button is a toggle button, specify a
					value for the attribute{" "}
					<a
						href='https://www.w3.org/TR/wai-aria-1.1/#button'
						target='_blank'
						rel='noreferrer'
					>
						aria-pressed
					</a>
					. For example, a button labelled mute in an audio player
					could indicate that sound is muted by setting the pressed
					state true. <strong>Important:</strong> it is critical the
					label on a toggle does not change when its state changes. In
					this example, when the pressed state is true, the label
					remains "Mute" so a screen reader would say something like
					"Mute toggle button pressed". Alternatively, if the design
					were to call for the button label to change from "Mute" to
					"Unmute," the aria-pressed attribute would not be needed.
				</li>
				<li className={styles["li"]}>
					Menu button: as described in the menu button pattern, a
					button is revealed to assistive technologies as a{" "}
					<a
						href='https://www.w3.org/TR/wai-aria-practices-1.1/#menubutton'
						target='_blank'
						rel='noreferrer'
					>
						menu button
					</a>{" "}
					if it has the property{" "}
					<a
						href='https://www.w3.org/TR/wai-aria-1.1/#aria-haspopup'
						target='_blank'
						rel='noreferrer'
					>
						aria-haspopup
					</a>{" "}
					set to either <code className='code'>menu</code> or{" "}
					<code className='code'>true</code>.
				</li>
			</ul>
			<h3>Keyboard Interaction</h3>
			<p>When the button has focus:</p>
			<ul>
				<li>
					<kbd>Space</kbd>: Activates the button.
				</li>
				<li>
					<kbd>Enter</kbd>: Activates the button.
				</li>
				<li>
					Following button activation, focus is set depending on the
					type of action the button performs. For example:
					<ul>
						<li>
							If activating the button opens a dialog, the focus
							moves inside the dialog. (see
							<a href='#dialog_modal'> dialog pattern</a>)
						</li>
						<li>
							If activating the button closes a dialog, focus
							typically returns to the button that opened the
							dialog unless the function performed in the dialog
							context logically leads to a different element. For
							example, activating a cancel button in a dialog
							returns focus to the button that opened the dialog.
							However, if the dialog were confirming the action of
							deleting the page from which it was opened, the
							focus would logically move to a new context.
						</li>
						<li>
							If activating the button does not dismiss the
							current context, then focus typically remains on the
							button after activation, e.g., an Apply or
							Recalculate button.
						</li>
						<li>
							If the button action indicates a context change,
							such as move to next step in a wizard or add another
							search criteria, then it is often appropriate to
							move focus to the starting point for that action.
						</li>
						<li>
							If the button is activated with a shortcut key, the
							focus usually remains in the context from which the
							shortcut key was activated. For example, if{" "}
							<kbd>Alt + U</kbd> were assigned to an "Up" button
							that moves the currently focused item in a list one
							position higher in the list, pressing{" "}
							<kbd>Alt + U</kbd> when the focus is in the list
							would not move the focus from the list.
						</li>
					</ul>
				</li>
			</ul>
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
