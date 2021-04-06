interface AbbrProps {
	/**
	 * Text to be displayed within <kbd> tags
	 */
	text: string
	/**
	 * Title that will be displayed when hovered over/read out by screen
	 * reader
	 */
	title: string
}

/**
 * A component to return an abbreviation jsx element.
 */
export const Abbr: React.FC<AbbrProps> = ({ text, title }): JSX.Element => {
	return <abbr title={title}>{text}</abbr>
}
