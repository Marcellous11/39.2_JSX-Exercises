const Tweet = (props) => {
	return (
		<div>
			<p>Username: {props.username}</p>
			<p>Tweet by: {props.name}</p>
			<p>Date: {props.date}</p>
			<p>Message: {props.message}</p>
		</div>
	);
};
