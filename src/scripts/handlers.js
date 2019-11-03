import { getEntries, postEntry } from './api.js';
import { renderEntries } from './dom.js';

const getValue = selector => document.querySelector(selector).value;

const createEntryObj = (date, concept, entry, mood) => ({ date, concept, entry, mood });

export const recordEntry = () => {
	const date = getValue('.input-date');
	const concepts = getValue('.input-concepts');
	const entry = getValue('.input-entry');
	const mood = getValue('.input-mood');

	if (!date || !concepts || !entry) return console.log("Entry is incomplete.");

	const newEntry = createEntryObj(date, concepts, entry, mood);

	postEntry(newEntry)
		.then(getEntries())
		.then(entries => renderEntries(entries));
};

// any function that returns a promise, you can chain a .then to, which fetch calls return promises