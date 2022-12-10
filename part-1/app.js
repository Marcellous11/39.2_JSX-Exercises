const App = () => {
	return (
		<div>
			<NamedComponent name="Marcellous" />
			<FirstComponent />
		</div>
	);
};

ReactDOM.render(<App />, document.getElementById('root'));
