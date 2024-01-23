const User = ({ params }) => {

	return (
		<>
			<h1>Info about {params.userlist}</h1>
			<h2>{params.userlist}</h2>
		</>
	)
}
export default User