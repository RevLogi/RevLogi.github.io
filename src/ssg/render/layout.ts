import { siteConfig } from "../config";
import type { PageMeta } from "../types";

// renderLayout: HTML shell for all pages.
// Input: meta (<head> data) + body (page HTML string)
// Output: complete HTML document string
export function renderLayout(meta: PageMeta, body: string): string {
	const canonicalUrl = `${siteConfig.url}${meta.path}`;
	const navItems = [
		["About", "/about/"],
		["Friends", "/friends/"],
		["Links", "/links/"],
		["Tags", "/tags/"],
		["RSS", "/rss.xml"],
	]
		.map(([label, path]) => {
			const current = meta.path === path ? ' aria-current="page"' : "";
			return `<a href="${path}"${current}>${label}</a>`;
		})
		.join("");

	return `<!doctype html>
<html lang="${siteConfig.lang}">
<head>
<meta charset="utf-8"/>
<meta name="viewport" content="width=device-width, initial-scale=1"/>
<title>${meta.title} • ${siteConfig.title}</title>
<meta name="description" content="${meta.description ?? siteConfig.description}"/>
<link rel="canonical" href="${canonicalUrl}"/>
<link rel="icon" href="/so.jpg" type="image/jpeg"/>
<link rel="apple-touch-icon" href="/so.jpg"/>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link href="https://fonts.googleapis.com/css2?family=EB+Garamond&family=Open+Sans:wght@300;400&family=JetBrains+Mono&display=swap" rel="stylesheet">
<link rel="stylesheet" href="/style.css"/>
<link rel="stylesheet" href="/katex.css"/>
<link rel="alternate" type="application/rss+xml" title="${siteConfig.title}" href="/rss.xml"/>
</head>
<body>
<header class="site-header">
<a class="site-title" href="/">${siteConfig.title}</a>
<nav class="site-nav" aria-label="Primary navigation">${navItems}</nav>
</header>
<main>
${body}
</main>
</body>
</html>`;
}
