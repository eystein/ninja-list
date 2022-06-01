import Head from 'next/head'

// Stateless functional component
const About = () => {
	return (
		<>
			<Head>
				<title>Ninja List | About</title>
				<meta name="keywords" content="Ninjas" />
			</Head>
			<h1>About</h1>
			<p>This is my first attempt at a stateless functional component.</p>
			<p>Or, you know, an About webpage. Booh!</p>
			<p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totam nulla voluptate saepe necessitatibus nostrum alias tempora, libero distinctio facilis excepturi, amet quisquam sequi nobis modi eveniet numquam maiores ad! Vero?</p>
		</>
	);
}
 
export default About;

