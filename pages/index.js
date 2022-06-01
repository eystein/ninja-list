import Head from 'next/head'
import Image from 'next/image'
import Footer from '../comps/Footer'
import Navbar from '../comps/Navbar'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

export default function Home() {
  return (
		<>
			<Head>
				<title>Ninja List | Home</title>
				<meta name="keywords" content="Ninjas" />
			</Head>
			<div>			
				<h1 className={styles.title}>Homepage</h1>
				<p className={styles.text}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore officiis assumenda pariatur eos illum, sunt sequi aut atque consequuntur dolorem recusandae quia suscipit omnis laboriosam architecto! Nam quaerat dolore blanditiis.</p>
				<p className={styles.text}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore officiis assumenda pariatur eos illum, sunt sequi aut atque consequuntur dolorem recusandae quia suscipit omnis laboriosam architecto! Nam quaerat dolore blanditiis.</p>
				<Link href="/ninjas">
					<a className={styles.btn}>See Ninja listing</a>
				</Link>
			</div>
		</>
  )
}
