import { renderLayout } from "./layout";

export function renderAbout(): string {
	return renderLayout(
		{ title: "About" },
		`<h1>About</h1>
<div class="prose" style="max-width:none">
<p>Hi, I'm an undergraduate student at USTB, just getting started with computer science and programming. I hope to build some interesting things and share what I learn along the way.</p>
<p>You can find me on <a href="https://github.com/revlogi">github</a> or <a href="https://www.zhihu.com/people/corrupt-huan-ying">zhihu</a>.</p>
<p>Most posts begin with my own ideas and rough drafts, with substantial help from AI in shaping the final text.</p>
</div>`,
	);
}

export function renderFriends(): string {
	return renderLayout(
		{ title: "Friends" },
		`<h1>Friends</h1>
<ul class="friends-list">
  <li><a href="https://wdlin233.github.io"><span class="friend-name">wdlin</span><span class="friend-domain">wdlin233.github.io</span></a></li>
  <li><a href="https://siriuns.netlify.app"><span class="friend-name">Siriuns</span><span class="friend-domain">siriuns.netlify.app</span></a></li>
	<li><a href="https://wamingmo.github.io"><span class="friend-name">wamingmo</span><span class="friend-domain">https://wamingmo.github.io</span></a></li>
</ul>`,
	);
}

export function renderLinks(html: string): string {
	return renderLayout(
		{ title: "Links" },
		`<h1>Links</h1>
<div class="prose links-page">
${html}
</div>`,
	);
}
