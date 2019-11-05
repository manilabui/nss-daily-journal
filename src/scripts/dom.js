import createApp from './components/App.js';
import createForm from './components/Form.js';
import createFilter from './components/Filter.js';
import createEntry from './components/Entry.js';
import { handleDelete, handleSave, handleFilter } from './handlers.js';
import { getEntries } from './api.js';

const container = document.querySelector('.container');

const moods = ['Dope', 'Chill', 'Whelmed'];

export const renderEntries = entries => {
	const log = document.querySelector(".entries-log");
	let entriesStr = '';

	entries.forEach(entry => entriesStr += createEntry(entry));
	log.innerHTML = entriesStr;

	const deleteButtons = document.querySelectorAll('.button-delete');

	deleteButtons.forEach(button => {
		const id = button.id.split("--")[1];

		button.addEventListener('click', () => handleDelete(id));
	});
};

export const renderApp = () => {
	container.innerHTML = createApp();

	const form = document.querySelector('.form');
	const filter = document.querySelector(".entries-filter");

	form.innerHTML = createForm(moods);
	filter.innerHTML = createFilter(moods);
	getEntries().then(entries => renderEntries(entries));

	const saveEntryButton = document.querySelector('.button-save');
	const moodFilterButtons = document.querySelectorAll('.moodFilter');

	saveEntryButton.addEventListener('click', handleSave);
	moodFilterButtons.forEach(button => button.addEventListener('click', () => handleFilter(button.value)));
};