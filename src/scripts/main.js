import { getEntries } from './api.js';
import { renderEntries, renderForm } from './dom.js';

// render form
renderForm();

// render entries
getEntries().then(entries => renderEntries(entries));