interface AbbrProps {
	text: string
	title: string
}

export const Abbr: React.FC<AbbrProps> = ({ text, title }) => {
	return <abbr title={title}>{text}</abbr>
}
