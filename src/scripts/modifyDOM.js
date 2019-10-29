const renderJournalEntries = entries => {
	const entryLog = document.querySelector(`.entry-log`);

	entries.forEach(entry => entryLog.innerHTML += makeJournalEntryComponent(entry));
}