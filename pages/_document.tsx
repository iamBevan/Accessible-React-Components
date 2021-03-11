import Document, { Html, Head, Main, NextScript } from "next/document"

export default class MyDocument extends Document {
	render(): JSX.Element {
		return (
			<Html lang='en'>
				<title>Flamingo</title>
				<link rel='icon' href='/favicon.ico' />
				<Head />
				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		)
	}
}
