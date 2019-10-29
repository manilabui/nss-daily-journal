import API from './fetchData.js';
import renderEntries from './modifyDOM.js';

API.getJournalEntries()
	.then(entries => renderEntries(entries));