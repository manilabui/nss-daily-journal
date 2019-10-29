import makeJournalEntryComponent from './modifyDOM.js';

const renderEntries = entries => {
	const entryLog = document.querySelector(`.entry-log`);

	entries.forEach(entry => entryLog.innerHTML += makeJournalEntryComponent(entry));
};

export default renderEntries;