import api from './api.js';
import dom from './dom.js';

export default {
	recordEntry() {
		const newEntry = {
			date: document.querySelector(".date").value,
			concept: document.querySelector(".concepts").value,
			entry: document.querySelector(".entry").value,
			mood: document.querySelector(".mood").value
		};

		api.postEntry(newEntry)
			.then(api.getJournalEntries())
			.then(entries => dom.renderEntries(entries));
	}
};

// any function that returns a promise, you can chain a .then to, which fetch calls return promises