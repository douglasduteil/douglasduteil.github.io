<section>
	<ul>
		<li>
			<a href="mailto:douglasduteil@gmail.com" rel="noreferrer" target="_blank">Gmail</a>
		</li>
		<li>
			<a href="https://google.com/+DouglasDuteil" rel="noreferrer" target="_blank">Google +</a>
		</li>
		<li>
			<a href="https://twitter.com/douglasduteil" rel="noreferrer" target="_blank">Twitter</a>
		</li>
		<li>
			<a href="https://www.facebook.com/douglas.duteil" rel="noreferrer" target="_blank">Facebook</a
			>
		</li>
		<li>
			<a href="mailto:douglasduteil@outlook.com" rel="noreferrer" target="_blank">Outlook</a>
		</li>
	</ul>
</section>

<style lang="scss">
	@import '$lib/variables';
	@import '$lib/mixins';

	:global(section.\/contact) {
		justify-content: center;
		align-items: center;
	}

	ul {
		@include virgin-ul;
		@include f-row;
		flex-wrap: wrap;
		justify-content: space-around;
	}

	li {
		margin-top: 10px;
		margin-right: 10px;
	}

	a {
		text-align: center;

		display: block;
		color: #eee;
		text-decoration: none;

		background-color: rgba(0, 0, 0, 0.5);
		border-radius: 50%;

		width: 100px;
		height: 100px;
		line-height: 100px;

		@include media-min-tablet {
			width: 200px;
			height: 200px;
			line-height: 200px;
			font-size: 1.5em;
		}
	}
</style>
