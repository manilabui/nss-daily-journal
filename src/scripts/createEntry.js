// const journalEntry = {
// 	date: "",
// 	concept: "",
// 	entry: "",
// 	mood: ""
// };

// // Invoked when submit button is clicked
// const recordEntry = entry => entriesArr.push(journalEntry);

const makeJournalEntryComponent = entryObj => {
    const { date, concept, entry, mood, id } = entryObj;

    return `
    	<section id=${id}>
	    	<h2>${concept}</h2>
	    	<h5>${date}</h5>
	    	<h5>${mood}</h5>
	    	<p>${entry}</p>
	    <section>
    `;
};

export default makeJournalEntryComponent;