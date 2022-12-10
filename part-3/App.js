const App = () => {
	return (
		<div>
			<Person name="Marcellous" age={26} hobbies={[ 'Running', 'Swimming', 'Playing soccer' ]} />
			<Person name="Lilli" age={13} hobbies={[ 'Shopping', 'dancing', 'making small investments' ]} />
		</div>
	);
};

ReactDOM.render(<App />, document.getElementById('root'));
