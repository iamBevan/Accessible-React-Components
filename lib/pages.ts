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
}

const docsDirectory = join(process.cwd(), "docs")

export function getPageBySlug(slug: string): PageBySlug {
	const realSlug: string = slug.replace(/\.mdx$/, "")
	const fullPath = join(docsDirectory, `${realSlug}.mdx`)
	const fileContents = fs.readFileSync(fullPath, "utf8")
	const { data, content } = matter(fileContents)

	return { slug: realSlug, meta: data, content }
}

export function getAllPages(): AllPages[] {
	const slugs = fs.readdirSync(docsDirectory)
	const docs = slugs.map(slug => getPageBySlug(slug))

	return docs
}
