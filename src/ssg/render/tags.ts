import type { Post } from "../types";
import { renderLayout } from "./layout";
import { renderPostListItem } from "./post";

export function renderTagsIndex(tagCounts: Map<string, number>): string {
	const sorted = [...tagCounts.entries()].sort((a, b) => b[1] - a[1]);
	const items = sorted
		.map(([tag, count]) => `<li><a href="/tags/${tag}/"># ${tag}</a> (${count})</li>`)
		.join("\n  ");
	return renderLayout(
		{ title: "Tags", path: "/tags/" },
		`<h1>Tags</h1><ul class="tag-list">\n  ${items}\n</ul>`,
	);
}

export function renderTagPage(tag: string, posts: Post[]): string {
	const items = posts.map(renderPostListItem).join("\n  ");
	return renderLayout(
		{ title: `# ${tag}`, path: `/tags/${tag}/` },
		`<h1># ${tag}</h1><ul class="post-list">\n  ${items}\n</ul>`,
	);
}
