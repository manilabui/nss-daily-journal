import createApp from './components/App.js';
import createForm from './components/Form.js';
import createFilter from './components/Filter.js';
import createSearch from './components/Search.js';
import createEntry from './components/Entry.js';
import { getEntries } from './api.js';
import { handleEdit, handleDelete, handleSave, handleFilter, handleUpdate } from './handlers.js';

const container = document.querySelector('.container');
const moods = ['Dope', 'Chill', 'Whelmed'];

export const renderApp = () => {
	container.innerHTML = createApp();
	
	const form = document.querySelector('.form');
	const filter = document.querySelector(".entries-filter");

	form.innerHTML = createForm(moods);
	filter.innerHTML = createFilter(moods) + createSearch();
	getEntries().then(entries => renderEntries(entries));

	const saveEntryButton = document.querySelector('.button-save');
	const moodFilterButtons = document.querySelectorAll('.button-radio');

	saveEntryButton.addEventListener('click', handleSave);
	moodFilterButtons.forEach(button => button.addEventListener('click', () => handleFilter(button.value)));
};

export const renderEntries = entries => {
	const log = document.querySelector(".entries-log");
	let entriesStr = '';

	entries.forEach(entry => entriesStr += createEntry(entry));
	log.innerHTML = entriesStr;

	const editButtons = document.querySelectorAll('.button-edit');
	const deleteButtons = document.querySelectorAll('.button-delete');

	editButtons.forEach(button => {
		const id = button.id.split("--")[1];

		button.addEventListener('click', () => handleEdit(id));
	});

	deleteButtons.forEach(button => {
		const id = button.id.split("--")[1];

		button.addEventListener('click', () => handleDelete(id));
	});
};

export const renderUpdateForm = ({ date, concept, entry, mood, id }) => {
	document.querySelector('.input-date').value = date;
	document.querySelector('.input-concept').value = concept;
	document.querySelector('.input-entry').value = entry;
	document.querySelector('.input-mood').value = mood;
	document.querySelector('.input-id').value = id;
	document.querySelector('.button-save').hidden = true;

	const updateButton = document.querySelector('.button-update');

	updateButton.hidden = false;
	updateButton.addEventListener('click', () => handleUpdate(id));
};