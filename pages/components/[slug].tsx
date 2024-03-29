import { GetStaticPathsResult, GetStaticPropsResult } from "next"
import dynamic from "next/dynamic"
import { Fragment } from "react"
import { getPageBySlug, getAllPages } from "../../lib/pages"
import styles from "../../styles/pages/components.module.scss"

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
	layout: string
}

export default function Page({ slug }: PageProps): JSX.Element {
	const MDXContent = slug
		? dynamic(() => import(`../../mdx/components/${slug}.mdx`))
		: Fragment

	return (
		<div className={styles["main"]}>
			<MDXContent />
		</div>
	)
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
			meta: require(`../../mdx/components/${page.slug}.mdx`).meta ?? null,
			layout: page.layout,
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
