export default moodsArr => {
	let inputsStr = '';

	moodsArr.map(mood => {
		return inputsStr += `
			<input class="moodFilter" type="radio" name=mood value=${mood}>
			<label for"${mood}">${mood}</label>
		`;
	});

    return `
    	<fieldset>
	    	<legend>Filter by Mood:</legend>
	    	${inputsStr}
	    </fieldset>
    `;
};