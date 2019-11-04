// parent component that creates the bones of the HTML structure
export default () => {
	return `
		<header>
			<h1>Daily Journal</h1>
		</header>
		<section class="form"></section>
		<section class="entries">
			<article class="entries-filter"></article>
			<article class="entries-log"></article>
		</section>
	`;
};