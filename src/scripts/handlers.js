import { getEntries, postEntry, deleteEntry } from './api.js';
import { renderEntries } from './dom.js';

const getValue = selector => {
	const input = document.querySelector(selector);

	return input.checkValidity() ? input.value : false;
};
// don't actually see the point of this right now
const createEntryObj = (date, concept, entry, mood) => ({ date, concept, entry, mood });

export const handleSave = () => {
	const date = getValue('.input-date');
	const concepts = getValue('.input-concepts');
	const entry = getValue('.input-entry');
	const mood = getValue('.input-mood');

	if (!date || !concepts || !entry) return console.log("Invalid entry.");

	const newEntry = createEntryObj(date, concepts, entry, mood);
	// any function that returns a promise, you can chain a .then to, which fetch calls return promises
	postEntry(newEntry)
		.then(getEntries)
		.then(entries => renderEntries(entries));
};

export const handleFilter = mood => {
	getEntries()
		.then(entries => renderEntries(entries.filter(entry => entry.mood === mood)));
};

export const handleDelete = id => {
	deleteEntry(id)
		.then(getEntries)
		.then(entries => renderEntries(entries));
};