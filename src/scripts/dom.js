import { createForm } from './components/Form.js';
import { createEntry } from './components/Entry.js';
import { recordEntry } from './handlers.js';

export const renderForm = () => {
	const form = document.querySelector('.form');

	form.innerHTML = createForm();

	const saveEntryButton = document.querySelector('.save-entry');

	saveEntryButton.addEventListener('click', recordEntry);
};

export const renderEntries = entries => {
	const entryLog = document.querySelector(`.entry-log`);

	entries.forEach(entry => entryLog.innerHTML += createEntry(entry));
};