export default () => {
// TO DO: button needs to switch to an update button if editing
	const button = `
		<input 
			class="save-entry"
			form="form"
			type="submit" 
			name="saveEntry" 
			value="Save"
		/>
	`;

	return `
		<form id="form">
			<fieldset>
				<label for="date">Date</label>
				<input 
					class="input-date" 
					type="date" 
					name="date" 
					required 
				/>
			</fieldset>
			<fieldset>
				<label for="concepts">Concepts</label>
				<input 
					class="input-concepts" 
					type="text" 
					name="concepts" 
					title="Please enter only alphanumerical characters and {}();:." 
					autocomplete="off" 
					pattern="^[\\w\\s(){}:;]*$"
					required 
				/>
			</fieldset>
			<fieldset>
				<label for="entry">Entry</label>
				<textarea 
					class="input-entry" 
					name="entry" 
					placeholder="Tell me bout it"
					required></textarea
				>
			</fieldset>
			<fieldset>
				<label for="moods">Mood</label>
				<select class="input-mood" name="mood">
				    <option value="Dope">Dope</option>
				    <option value="Chill">Chill</option>
				    <option value="Whelmed">Whelmed</option>
				</select>
			</fieldset>
		</form>
		${button}
	`;
};