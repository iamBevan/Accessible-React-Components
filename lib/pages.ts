import fs from "fs"
import { join } from "path"
import matter from "gray-matter"

const docsDirectory = join(process.cwd(), "docs")

export function getPageBySlug(
	slug: string
): { slug: string; meta: { [key: string]: string }; content: string } {
	const realSlug: string = slug.replace(/\.mdx$/, "")
	const fullPath = join(docsDirectory, `${realSlug}.mdx`)
	const fileContents = fs.readFileSync(fullPath, "utf8")
	const { data, content } = matter(fileContents)

	return { slug: realSlug, meta: data, content }
}

export function getAllPages(): {
	slug: string
	meta: { [key: string]: string }
	content: string
}[] {
	const slugs = fs.readdirSync(docsDirectory)
	const docs = slugs.map(slug => getPageBySlug(slug))

	return docs
}
