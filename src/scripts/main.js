import api from './api.js';
import dom from './dom.js';
import event from './event.js';

const saveEntryButton = document.querySelector('.save-entry');

saveEntryButton.addEventListener('click', event.recordEntry);

api.getJournalEntries().then(entries => dom.renderEntries(entries));

saveEntryButton.disabled;
console.log(saveEntryButton)
console.log(document.querySelector('.save-entry').reportValidity())