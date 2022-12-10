const Person = ({ name, age, hobbies = [] }) => {
	return (
		<div>
			<p>Learn some infromation about this person</p>

			<div>
				<h2>Personal Infromation</h2>
				<p>Name: {name.length > 8 ? name.slice(0, 6) + '...' : name}</p>
				<p>Age: {age}</p>
			</div>

			<div>
				<h3>{age > 18 ? <p>Please go vote!</p> : <p>you must be 18</p>}</h3>
			</div>

			<div>
				<h3>Hobbies</h3>
				<ul>{hobbies.map((hobbie) => <li>{hobbie}</li>)}</ul>
			</div>
		</div>
	);
};
