import { GetStaticPathsResult, GetStaticPropsResult } from "next"
import dynamic from "next/dynamic"
import { getPageBySlug, getAllPages } from "../../lib/pages"

interface PageProps {
	slug: string | undefined
}

interface StaticProps {
	params: { [key: string]: string }
	slug: string
}

interface StaticPropsResult {
	slug: string
	content: string
	meta: { [key: string]: string }
}

export default function Page({ slug }: PageProps): JSX.Element {
	const MDXContent = dynamic(() => import(`../../docs/${slug ?? "dog"}.mdx`))

	return <MDXContent />
}

export function getStaticProps({
	params,
}: StaticProps): GetStaticPropsResult<StaticPropsResult> {
	const page = getPageBySlug(params.slug)

	return {
		props: {
			slug: page.slug,
			content: page.content,
			// eslint-disable-next-line @typescript-eslint/no-var-requires
			meta: require(`../../docs/${page.slug}.mdx`).meta ?? null,
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
