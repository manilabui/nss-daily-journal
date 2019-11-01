export const createForm = () => {
	const regEx = "^[\\w\\s(){}:;]*$"; // allows alphanumerical characters and {}():;
	// TO DO: button needs to switch to an update button if editing
	const button = `
		<input 
			class="save-entry" 
			type="submit" 
			name="saveEntry" 
			value="Save">
	`;

	return `
		<form>
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
					class="concepts" 
					type="text" 
					name="concepts" 
					title="Please enter only alphanumerical characters and {}();:." 
					autocomplete="off" 
					pattern=${regEx}
					required 
				/>
			</fieldset>
			<fieldset>
				<label for="entry">Entry</label>
				<textarea 
					class="entry" 
					name="entry" 
					placeholder="Tell me bout it"
					required>
				</textarea>
			</fieldset>
			<fieldset>
				<label for="moods">Mood</label>
				<select id="mood" name="mood">
				    <option value="dope">Dope</option>
				    <option value="chill">Chill</option>
				    <option value="whelmed">Whelmed</option>
				</select>
			</fieldset>
			${button}
		</form>
	`;
};