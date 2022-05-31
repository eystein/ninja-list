import Link from "next/link";

const Navbar = () => {
	return ( 
		<nav>
			<div className="logo">
				<h1>Ninja List</h1>
			</div>
			<ul>
				<li><Link href="/"><a>Home</a></Link></li>
				<li><Link href="/about"><a>About</a></Link></li>
				<li><Link href="/ninjas"><a>Ninja Listing</a></Link></li>
			</ul>
		</nav>
	 );
}
 
export default Navbar;