export default ({ date, concept, entry, mood, id }) => {
	const formattedDate = date.split('-').join('.');

    return `
    	<section id=${id}>
	    	<h2>${concept}</h2>
	    	<h5>${formattedDate}</h5>
	    	<h5>${mood}</h5>
	    	<p>${entry}</p>
	    	<button class="button-edit" id="edit--${id}">Edit</button>
	    	<button class="button-delete" id="delete--${id}">Delete</button>
	    </section>
	    <hr />
    `;
};