import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
	return ( 
		<nav>
			<div className="logo">
				<Image src="/logo.png" width={128} height={77} alt="" />
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