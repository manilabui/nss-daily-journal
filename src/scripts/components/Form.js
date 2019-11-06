export default moods => {
	let moodOptions = '';

	moods.map(mood => moodOptions += `<option value=${mood}>${mood}</option>`);

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
				<label for="concepts">Concept</label>
				<input 
					class="input-concept" 
					type="text" 
					name="concept" 
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
					required
				></textarea>
			</fieldset>
			<fieldset>
				<label for="moods">Mood</label>
				<select class="input-mood" name="mood" required>
					<option value="">How you feelin, booboo?</option>
				    <option value="Dope">Dope</option>
				    <option value="Chill">Chill</option>
				    <option value="Whelmed">Whelmed</option>
				</select>
			</fieldset>
			<input 
				class="input-id" 
				type="number" 
				name="id" 
				hidden
			/>
		</form>
		<input 
			class="button-save"
			form="form"
			type="submit" 
			name="saveEntry" 
			value="Save"
		/>
		<input 
			class="button-update"
			form="form"
			type="submit" 
			name="updateEntry" 
			value="Update"
			hidden
		/>
	`;
};