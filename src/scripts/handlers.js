import { getEntries, postEntry, getEntry, deleteEntry, putEntry } from './api.js';
import { renderEntries, renderUpdateForm } from './dom.js';

const getValue = selector => {
	const input = document.querySelector(selector);

	return input.checkValidity() ? input.value : false;
};
// don't actually see the point of this right now
const createEntryObj = (date, concept, entry, mood) => ({ date, concept, entry, mood });

export const handleSave = () => {
	const date = getValue('.input-date');
	const concept = getValue('.input-concept');
	const entry = getValue('.input-entry');
	const mood = getValue('.input-mood');

	if (!date || !concept || !entry) return console.log("Invalid entry.");

	const newEntry = createEntryObj(date, concept, entry, mood);
	// any function that returns a promise, you can chain a .then to, which fetch calls return promises
	postEntry(newEntry)
		.then(getEntries)
		.then(entries => renderEntries(entries));
};

export const handleFilter = mood => {
	getEntries()
		.then(entries => renderEntries(entries.filter(entry => entry.mood === mood)));
};

export const handleEdit = id => {
	getEntry(id)
		.then(entry => renderUpdateForm(entry));
};

export const handleUpdate = id => {
	const date = getValue('.input-date');
	const concept = getValue('.input-concept');
	const entry = getValue('.input-entry');
	const mood = getValue('.input-mood');

	if (!date || !concept || !entry) return console.log("Invalid entry.");

	const updatedEntry = createEntryObj(date, concept, entry, mood);

	document.querySelector('.input-date').value = '';
	document.querySelector('.input-concept').value = '';
	document.querySelector('.input-entry').value = '';
	document.querySelector('.input-mood').value = '';
	document.querySelector('.input-id').value = '';
	document.querySelector('.button-save').hidden = false;
	document.querySelector('.button-update').hidden = true;

	putEntry(id, updatedEntry)
		.then(getEntries)
		.then(entries => renderEntries(entries));
};

export const handleDelete = id => {
	deleteEntry(id)
		.then(getEntries)
		.then(entries => renderEntries(entries));
};