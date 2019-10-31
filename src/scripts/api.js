const url = 'http://localhost:8080/entries';

export default {
	getJournalEntries() {
		return fetch(url)
		    .then(response => response.json())
	},
	postEntry(entry) {
		return fetch(url, {
	    	method: "POST",
	    	headers: {
	        	"Content-Type": "application/json"
	    	},
	    	body: JSON.stringify(entry)
		});
	}
};