export const getStaticPaths = async () => {
	const res = fetch('https://jsonplaceholder.typicode.com/users');
	const data = await res.json();

	const path = data.map(ninja => {
		return {
			params: {
				id: ninja.id.toString()
			}
		}
	})

	return {
		// paths: [{}, {}, { params: { id: 1} }]
		paths: paths,
		fallback: false
	}
}

const Details = () => {
	return (
		<div>
			<h1>Details page</h1>
		</div>
	);
}
 
export default Details;