export const createEntry = ({ date, concept, entry, mood, id }) => {
    return `
    	<section id=${id}>
	    	<h2>${concept}</h2>
	    	<h5>${date}</h5>
	    	<h5>${mood}</h5>
	    	<p>${entry}</p>
	    </section>
	    <hr />
    `;
};