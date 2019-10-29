const API = {
	getJournalEntries() {
		return fetch('http://localhost:8080/entries')
		    .then(response => response.json())
	}
};

export default API;