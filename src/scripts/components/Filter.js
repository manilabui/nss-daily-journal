export default moodsArr => {
	let inputsStr = '';

	moodsArr.map(mood => {
		return inputsStr += `
			<div class="moodFilter">
				<input class="button-radio" type="radio" name=mood value=${mood}>
				<label for"${mood}">${mood}</label>
			</div>
		`;
	});

    return `
    	<fieldset>
	    	<legend>Filter by Mood</legend>
	    	${inputsStr}
	    </fieldset>
    `;
};