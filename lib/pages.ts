import fs from "fs"
import { join } from "path"
import matter from "gray-matter"

interface AllPages {
	slug: string
	meta: { [key: string]: string }
	content: string
}

interface PageBySlug {
	slug: string
	meta: { [key: string]: string }
	content: string
	layout: string
}

const pagesDirectory = join(process.cwd(), "mdx/components")

export function getPageBySlug(slug: string): PageBySlug {
	const realSlug: string = slug.replace(/\.mdx$/, "")
	const fullPath = join(pagesDirectory, `${realSlug}.mdx`)
	const fileContents = fs.readFileSync(fullPath, "utf8")
	const { data, content } = matter(fileContents)

	return { slug: realSlug, meta: data, content, layout: "components" }
}

export function getAllPages(): AllPages[] {
	const slugs = fs.readdirSync(pagesDirectory)
	const pages = slugs.map(slug => getPageBySlug(slug))

	return pages
}
