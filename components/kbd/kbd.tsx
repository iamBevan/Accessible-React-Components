interface KbdProps {
	text: string
}

export const Kbd: React.FC<KbdProps> = ({ text }) => {
	return <kbd>{text}</kbd>
}
