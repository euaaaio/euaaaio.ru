<div></div>
<e-section-person>
	<template #bio>
		Независимый <br>дизайнер, разработчик, супрематист <br><br><s>Фриланс</s>
	</template>
	<template #shortcutTop>
		<e-link-preview href="/ru/consultancy">
			Доступен <br>для консультации
		</e-link-preview>
	</template>
	<template #table>
		<dd>Говорю</dd>
		<dt>Санкт-Петербург, Россия</dt>
		<dd>Нахожусь</dd>
	</template>
	<template #article>
		<e-link-preview external href="https://twitter.com/euaaaio/status/1468361099246514189">
			Выпустил Vue Nanostores 0.5 с несколькими новыми функциями.
		</e-link-preview>
	</template>
	<!-- <template #shortcutBottom>
		<e-link-preview href="/ru/now">
			Посмотреть <br>над чем работаю сейчас
		</e-link-preview>
	</template> -->
</e-section-person>
<e-section-connect>
	<template #contact>
		<dt>
			<e-link-external href="mailto:hello@euaaaio.ru">
				hello@euaaaio.ru
			</e-link-external>
		</dt>
		<dd>для действительно важного</dd>
		<dt>00 911 785 85 70</dt>
		<dd>для тишины</dd>
	</template>
	<template #username>
		<dt>euaaaio</dt>
		<dd>как псевдоним, чтобы найти меня</dd>
	</template>
	<template #follow>
		<ul>
			<li>
				<e-link-external href="https://open.spotify.com/user/bt3c50mixhdyv8qb56a6hpnbi">Спотифай</e-link-external>
			</li>
		</ul>
		<ul>
			<li>
				<e-link-external href="https://t.me/euaaaio">Телеграм</e-link-external>
			</li>
			<li>
				<e-link-external href="https://discordapp.com/users/euaaaio#2400">Дискорд</e-link-external>
			</li>
		</ul>
		<ul>
			<li>
				<e-link-external href="https://instagram.com/euaaaio">Инстаграм</e-link-external>
			</li>
			<li>
				<e-link-external href="https://facebook.com/euaaaio">Фейсбук</e-link-external>
			</li>
			<li>
				<e-link-external href="https://twitter.com/euaaaio">Твиттер</e-link-external>
			</li>
			<li>
				<e-link-external href="https://vk.com/euaaaio">ВК</e-link-external>
			</li>
		</ul>
		<ul>
			<li>
				<e-link-external href="https://pinterest.com/suprematist">Пинтерест</e-link-external>
			</li>
			<li>
				<e-link-external href="https://behance.com/euaaaio">Беханс</e-link-external>
			</li>
			<li>
				<e-link-external href="https://dribbble.com/euaaaio">Дриббл</e-link-external>
			</li>
			<li>
				<e-link-external href="https://ello.co/euaaaio">Элло</e-link-external>
			</li>
		</ul>
		<ul>
			<li>
				<e-link-external href="https://github.com/euaaaio">Гитхаб</e-link-external>
			</li>
		</ul>
	</template>
	<template #gpg>
		<dt>
			<span class="mark">GPG</span>
			<span>8A96 72CC F199 75E6</span>
		</dt>
		<dd>для верификации</dd>
	</template>
</e-section-connect>

<script setup>
import ESectionPerson from '@theme/components/ESectionPerson.vue'
import ESectionConnect from '@theme/components/ESectionConnect.vue'
</script>

<style lang="stylus" scoped>
</style>
