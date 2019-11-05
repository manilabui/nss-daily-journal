import createApp from './components/App.js';
import createForm from './components/Form.js';
import createFilter from './components/Filter.js';
import createEntry from './components/Entry.js';
import { handleEdit, handleDelete, handleSave, handleFilter } from './handlers.js';
import { getEntries } from './api.js';

const container = document.querySelector('.container');
const form = document.querySelector('.form');

const moods = ['Dope', 'Chill', 'Whelmed'];

export const renderApp = () => {
	container.innerHTML = createApp();

	
	const filter = document.querySelector(".entries-filter");

	form.innerHTML = createForm(moods);
	filter.innerHTML = createFilter(moods);
	getEntries().then(entries => renderEntries(entries));

	const saveEntryButton = document.querySelector('.button-save');
	const moodFilterButtons = document.querySelectorAll('.moodFilter');

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

export const populateForm = entry => {
	const dateInput = document.querySelector('.input-date');
	const conceptsInput = document.querySelector('.input-concepts');
	const entryInput = document.querySelector('.input-entry');
	const moodInput = document.querySelector('.input-mood');

	
};