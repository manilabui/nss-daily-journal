import { getEntries, postEntry } from './api.js';
import { renderEntries } from './dom.js';
import { createEntryObj } from './factory.js';
import { getValue } from './helpers.js';

export const recordEntry = () => {
	const date = getValue('.date');
	const concepts = getValue('.concepts');
	const entry = getValue('.entry');
	const mood = getValue('.mood');

	const newEntry = createEntryObj(date, concepts, entry, mood);

	postEntry(newEntry)
		.then(getEntries())
		.then(entries => renderEntries(entries));
}

// any function that returns a promise, you can chain a .then to, which fetch calls return promises