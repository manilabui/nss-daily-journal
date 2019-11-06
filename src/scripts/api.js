const url = 'http://localhost:8081/entries';

export const getEntries = () => fetch(url).then(response => response.json());

export const getEntry = id => fetch(`${url}/${id}`).then(response => response.json());
	
export const postEntry = entry => {
	return fetch(url, {
    	method: "POST",
    	headers: {
        	"Content-Type": "application/json"
    	},
    	body: JSON.stringify(entry)
	});
};

export const putEntry = (id, entry) => {
	return fetch(`${url}/${id}`, {
    	method: "PUT",
    	headers: {
        	"Content-Type": "application/json"
    	},
    	body: JSON.stringify(entry)
	});
};

export const deleteEntry = id => {
	return fetch(`${url}/${id}`, {
		method: "DELETE"
	})
		.then(response => response.json());
};