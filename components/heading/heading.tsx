import React from "react"

interface HeadingProps {
	type: string
	text: string
}

const Heading: React.FC<HeadingProps> = ({ type, text }) => {
	const HTMLTag = `${type}` as keyof JSX.IntrinsicElements
	return <HTMLTag>{text}</HTMLTag>
}

export { Heading }
