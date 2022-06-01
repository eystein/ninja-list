import Link from "next/link";
import { useEffect } from "react";
import { useRouter } from "next/router";

const NotFound = () => {
	const router = useRouter();

	// Fire this function when the page first loads.
	useEffect(() => {
		setTimeout(() => {
			// router.go(-1)
			router.push('/'); // redirect to homepage.
		}, 3000) // after 3 seconds.
	}, []) // empty array as second argument
	// the dependency array
	// when empty, says only fire this function once
	// and not again if any state changes

	return (
		<div className="not-found">
			<h1>Oooops...</h1>
			<h2>That page cannot be found.</h2>
			<p>Go back the <Link href="/"><a>Homepage</a></Link>.</p>
		</div>
	);
}
 
export default NotFound;