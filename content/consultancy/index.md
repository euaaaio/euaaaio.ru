---
title: Available for consultancy
description:
  I help launch, improve and update products and services.
  Quickly understand issues and solve problems.
head:
  - - link
    - rel: alternate
      hreflang: ru-RU
      href: https://euaaaio.ru/ru/consultancy/
---

<div class="consultancy">
	<header class="consultancy__header g">
		<h1 class="consultancy__title">Available for consultancy</h1>
	</header>
	<section class="consultancy__section g" id="about">
		<p class="preview">
			I help launch, improve and update products and services.
			Quickly understand issues and solve problems.
		</p>
		<p class="article__enumeration">
			<strong>About launching and updating:</strong>
			<span>processes, phases, specialists, hiring, budget and understanding the task. I will tell you what to do, how to do it and how much time and money it will require.</span>
		</p>
		<p class="article__enumeration">
			<strong>About design solutions:</strong>
			<span>understanding, accepting, evaluating and criticism, metaphor, graphics, typography, patterns, challenging scenarios, user experience and edge cases. I will help you find and solve design problems.</span>
		</p>
		<p class="article__enumeration">
			<strong>About management:</strong>
			<span>business tasks, leadership, process building, design and development balance, communications and relationships. I will help you fix or improve your design and development processes.</span>
		</p>
	</section>
	<section class="consultancy__section g" id="who">
		<p class="p about">I specialize in consulting and project management, where design and development balance is important.</p>
		<e-link-preview class="now" href="/now/">See what <br>I’m working on now</e-link-preview>
		<div class="details">
			<p class="p">Co-founder of a service for publishing and scheduling posts to social networks — <e-link-external href="https://postanu.com">Postanu</e-link-external>.</p>
			<p class="p">Author of a blog about the fundamentals and dark shades of design through time — <e-link-external href="https://absorptie.cc">Absorptie</e-link-external>.</p>
			<p class="p">Creator and curator of the community about Suprematism as an art movement — <e-link-external href="https://suprematist.cc">Suprematis</e-link-external>.</p>
			<p class="p">Developer and maintainer of open source tools for developers:</p>
			<p class="p">A framework for building real-time collaborative applications — <e-link-external href="https://github.com/logux">Logux</e-link-external>;</p>
			<p class="p">A tiny state manager for React, Preact, Vue, Svelte and pure JS — <e-link-external href="https://github.com/nanostores">Nanostores</e-link-external>.</p>
		</div>
	</section>
	<section class="consultancy__section g" id="questions">
		<dl>
			<dt>What is the format of the meeting?</dt>
			<dd>
				<p>One-on-one chat in Discord or any other messaging service.</p>
			</dd>
			<dt>How to discuss everything and not to miss anything?</dt>
			<dd>
				<p>Before the consultation, I will ask you to take a survey or write answers to a few questions.</p>
				<p>I don't design or write text or code during the consultation. I don't record or outline the meeting. You can record it, but you cannot publish it.</p>
			</dd>
			<dt>How and when can we start?</dt>
			<dd>
				<p>Email, Discord or Telegram me to answer clarifying questions, choose a date and time, get an invoice and send prepayment.</p>
				<p>Appointments are usually booked a week in advance, and prepayment is 100%.</p>
			</dd>
			<dt>How many meetings are needed?</dt>
			<dd>
				<p>It depends on your task. One meeting to get a quick understanding of an issue. Two to define the problem and start the processes. Three or four to create and release a new product. Once a week, for intensive long-distance work.</p>
				<p>If you need more, you can hire me as a temporary Art director.</p>
			</dd>
		</dl>
	</section>
	<section class="consultancy__section g" id="pricing">
		<dl>
			<div>
				<dt>$300</dt>
				<dd>for a two-hour consultation</dd>
			</div>
			<div>
				<dt>≥ $2000</dt>
				<dd>to hire me <br>as a temporary Art director.</dd>
			</div>
		</dl>
	</section>
</div>

<style lang="stylus" scoped>
.consultancy
	display: grid

	@media (max-width: 736px)
		margin-top: 220px

.consultancy__header
	position: sticky
	top: 10px
	z-index: -1
	grid-auto-rows: max-content

	@media (max-width: 736px)
		position: sticky
		align-items: flex-end

.consultancy__title
	grid-column: j / span 2
	font-weight: bold

.consultancy__section
	grid-auto-rows: minmax(60px, auto)

	&:not(:first-of-type)
		padding-top: 310px

		@media (max-width: 736px)
			padding-top: 240px

	> *
		grid-column: j / span 2

#preview
	@media (max-width: 736px)
		padding-top: 300px

#about
	gap: 120px 20px

	@media (max-width: 736px)
		gap: 120px 0

	.preview
		height: 160px

		@media (max-width: 736px)
			height: 200px

#who
	.p:first-letter
		padding-left: 30px

	.about
		grid-row-end: span 7

		@media (max-width: 736px)
			grid-row-end: inherit
			margin-bottom: 240px

	.now
		grid-area: 4 / e / span 2

		@media (max-width: 736px)
			grid-row: auto
			grid-column: j
			margin-bottom: 120px

	.details
		> p
			padding-bottom: 0px

		> p:nth-child(1), p:nth-child(3)
			padding-bottom: 60px

		> p:nth-child(2)
			padding-bottom: 20px

#questions
	dl
		display: grid
		grid-template-columns: repeat(4, 1fr)
		grid-column: h / span 4
		gap: 60px 20px

		@media (max-width: 736px)
			display: flex
			flex-direction: column
			grid-column: j / span 2
			gap: 0px

		dt
			grid-column: 1

			@media (max-width: 736px)
				padding-bottom: 20px
				font-weight: 700

				&:not(:first-of-type)
					padding-top: 120px

		dd
			grid-column: 3 / 5
			color: inherit

		p:first-letter
			padding-left: 30px

#pricing
	dl
		display: grid
		grid-column-end: span 3
		gap: 120px

		dt
			font-size: 60px
			font-weight: 600

			@media (max-width: 736px)
				font-size: 11vw

.article__enumeration
	> strong
		display: block
		padding-bottom: 20px

	> span
		display: block

		&:first-letter
			padding-left: 150px

			@media (max-width: 1440px)
				padding-left: 30px
</style>
