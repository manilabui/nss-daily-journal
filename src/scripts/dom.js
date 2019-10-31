import components from './components/entry.js';

export default {
	renderEntries(entries) {
		const entryLog = document.querySelector(`.entry-log`);

		entries.forEach(entry => entryLog.innerHTML += components.createEntry(entry));
	}
};