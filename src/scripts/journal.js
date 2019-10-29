import API from './fetchData.js';
import modifyDOM from './modifyDOM.js';

API.getJournalEntries()
	.then(entries => renderJournalEntries.modifyDOM(entries));