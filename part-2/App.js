const App = () => {
	return (
		<div>
			<Tweet username="TheKid" name="Lary" date="Today" message="This is my first tweet" />
			<Tweet
				username="freeMason"
				name="Paul"
				date="Yesterday"
				message="So I joined this new club the other day and man the things we talk about are cabin me out"
			/>
			<Tweet
				username="catlover12"
				name="Cindy"
				date="Tomorrow"
				message="To be in the future is to not exisit becuase the day has yet to have its time."
			/>
		</div>
	);
};

ReactDOM.render(<App />, document.getElementById('root'));
