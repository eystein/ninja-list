import styles from '../../styles/Ninjas.module.css';
import Link from 'next/link';

export const getStaticProps = async () => {

	const res = await fetch('https://jsonplaceholder.typicode.com/users');
	const data = await res.json();

	return {
		props: { ninjas: data }
	}

}

const Ninjas = ({ ninjas }) => {
	return ( 
		<>
			<h1>Ninjas list</h1>
			<ul className='no-bullet'>
			{ninjas.map(ninja => (
				<li key={ninja.id}>
					<Link href={'/ninjas/' + ninja.id}>
						<a className={styles.single}>{ ninja.name }</a>
					</Link>
				</li>
			))}
			</ul>
		</>
	);
}
 
export default Ninjas;
