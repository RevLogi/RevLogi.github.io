import { formatDate } from "../date";
import type { Post } from "../types";
import { renderLayout } from "./layout";

interface PostNeighbours {
	newer?: Post;
	older?: Post;
}

// renderPost: a single post's full page.
// Input: Post (with title/publishDate/html)
// Output: HTML string
export function renderPost(post: Post, neighbours: PostNeighbours = {}): string {
	const newer = neighbours.newer
		? `<a class="post-nav-newer" href="/posts/${neighbours.newer.slug}/"><span>← Newer</span>${neighbours.newer.title}</a>`
		: "";
	const older = neighbours.older
		? `<a class="post-nav-older" href="/posts/${neighbours.older.slug}/"><span>Older →</span>${neighbours.older.title}</a>`
		: "";

	return renderLayout(
		{
			title: post.title,
			path: `/posts/${post.slug}/`,
			description: post.description,
		},
		`<article>
<h1>${post.title}</h1>
<time datetime="${post.publishDate.toISOString()}">${formatDate(post.publishDate)}</time>
${post.tag ? `<p class="tag"><a href="/tags/${post.tag}/">#${post.tag}</a></p>` : ""}
<div class="prose">${post.html}</div>
<nav class="post-nav" aria-label="More posts">
${newer}
${older}
</nav>
<a class="back-to-posts" href="/">← All posts</a>
</article>`,
	);
}

export function renderPostListItem(post: Post): string {
	return `<li>
<h2><a href="/posts/${post.slug}/">${post.title}</a></h2>
${post.description ? `<p class="post-description">${post.description}</p>` : ""}
<div class="post-meta">
<time datetime="${post.publishDate.toISOString()}">${formatDate(post.publishDate)}</time>
${post.tag ? `<span aria-hidden="true">·</span><a href="/tags/${post.tag}/">#${post.tag}</a>` : ""}
</div>
</li>`;
}

// renderIndex: home page = flat list of all posts.
// Input: Post[] (sorted)
// Output: HTML string
export function renderIndex(posts: Post[]): string {
	const items = posts.map(renderPostListItem).join("\n  ");
	return renderLayout(
		{ title: "Home", path: "/" },
		`<h1>Posts</h1>
<ul class="post-list">
  ${items}
</ul>`,
	);
}
