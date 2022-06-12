---
head:
  - - link
    - rel: alternate
      hreflang: ru-RU
      href: https://euaaaio.ru/ru/
---

<div></div>
<e-section-person>
	<template #bio>
		Independent <br>designer, developer, suprematist <br><br><s>Freelance</s>
	</template>
	<template #shortcutTop>
		<e-link-preview href="/consultancy/">
			Available <br>for consultancy
		</e-link-preview>
	</template>
	<template #table>
		<dd>Speaking</dd>
		<dt>Saint-Petersburg, Russia</dt>
		<dd>Living in</dd>
	</template>
	<template #article>
		<e-link-preview href="/notes/now-but-not-twitter/">
			<strong>Now, but not Twitter</strong>
			Following people's latest updates and activities on social media is difficult.
		</e-link-preview>
	</template>
	<template #shortcutBottom>
		<e-link-preview href="/now/">
			See what <br>I’m working on now
		</e-link-preview>
	</template>
</e-section-person>
<e-section-connect>
	<template #contact>
		<dt>
			<a href="mailto:hello@euaaaio.ru" target="_blank" rel="noopener">
				hello@euaaaio.ru
			</a>
		</dt>
		<dd>for what really matters</dd>
		<dt>00 911 785 85 70</dt>
		<dd>for silence</dd>
	</template>
	<template #username>
		<dt>euaaaio</dt>
		<dd>as alias to find me</dd>
	</template>
	<template #follow>
		<ul>
			<li>
				<e-link-external href="https://open.spotify.com/user/bt3c50mixhdyv8qb56a6hpnbi">Spotify</e-link-external>
			</li>
		</ul>
		<ul>
			<li>
				<e-link-external href="https://t.me/euaaaio">Telegram</e-link-external>
			</li>
			<li>
				<e-link-external href="https://discordapp.com/users/euaaaio#2400">Discord</e-link-external>
			</li>
		</ul>
		<ul>
			<li>
				<e-link-external href="https://instagram.com/euaaaio">Instagram</e-link-external>
			</li>
			<li>
				<e-link-external href="https://facebook.com/euaaaio">Facebook</e-link-external>
			</li>
			<li>
				<e-link-external href="https://twitter.com/euaaaio">Twitter</e-link-external>
			</li>
			<li>
				<e-link-external href="https://vk.com/euaaaio">VK</e-link-external>
			</li>
		</ul>
		<ul>
			<li>
				<e-link-external href="https://pinterest.com/suprematist">Pinterest</e-link-external>
			</li>
			<li>
				<e-link-external href="https://behance.com/euaaaio">Behance</e-link-external>
			</li>
			<li>
				<e-link-external href="https://dribbble.com/euaaaio">Dribbble</e-link-external>
			</li>
			<li>
				<e-link-external href="https://ello.co/euaaaio">Ello</e-link-external>
			</li>
		</ul>
		<ul>
			<li>
				<e-link-external href="https://github.com/euaaaio">Github</e-link-external>
			</li>
		</ul>
	</template>
	<template #gpg>
		<dt>
			<span class="mark">GPG</span>
			<span>8A96 72CC F199 75E6</span>
		</dt>
		<dd>for verifying</dd>
	</template>
</e-section-connect>

<script setup>
import ESectionPerson from '@theme/components/ESectionPerson.vue'
import ESectionConnect from '@theme/components/ESectionConnect.vue'
</script>

<style lang="stylus" scoped>
</style>
