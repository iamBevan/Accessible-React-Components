import { GetStaticPathsResult, GetStaticPropsResult } from "next"
import { getAllPages, getPageBySlug } from "../../../lib/pages"

export default function Page({ content }: { content: string }): JSX.Element {
	return <h1>{content}</h1>
}

export function getStaticProps({
	params,
}: {
	params: { [key: string]: string }
}): GetStaticPropsResult<{
	slug: string
	content: string
	meta: { [key: string]: string }
}> {
	const page = getPageBySlug(params.slug)

	return {
		props: {
			slug: page.slug,
			content: page.content,
			meta: page.meta,
		},
	}
}

export function getStaticPaths(): GetStaticPathsResult {
	const pages = getAllPages()

	return {
		paths: pages.map(page => {
			return {
				params: {
					slug: page.slug,
				},
			}
		}),
		fallback: true,
	}
}
