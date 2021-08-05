import React from "react"

type HeadingType = "h1" | "h2" | "h3" | "h4" | "h5" | "h6"

interface HeadingProps {
	type: HeadingType
	text: string
}

const Heading: React.FC<HeadingProps> = ({ type, text }) => {
	const HTMLTag = `${type}` as keyof JSX.IntrinsicElements
	return <HTMLTag>{text}</HTMLTag>
}

export { Heading }
