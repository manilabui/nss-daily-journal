const url = 'http://localhost:8081/entries';

export const getEntries = () => fetch(url).then(response => response.json());

export const getEntry = id => {
	return fetch(`url/${id}`);
};
	
export const postEntry = entry => {
	return fetch(url, {
    	method: "POST",
    	headers: {
        	"Content-Type": "application/json"
    	},
    	body: JSON.stringify(entry)
	});
};