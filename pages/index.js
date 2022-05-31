import Head from 'next/head'
import Image from 'next/image'
import Footer from '../comps/Footer'
import Navbar from '../comps/Navbar'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

export default function Home() {
  return (
		<div className={styles.container}>			
			<h1>Homepage</h1>
			<p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore officiis assumenda pariatur eos illum, sunt sequi aut atque consequuntur dolorem recusandae quia suscipit omnis laboriosam architecto! Nam quaerat dolore blanditiis.</p>
			<p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore officiis assumenda pariatur eos illum, sunt sequi aut atque consequuntur dolorem recusandae quia suscipit omnis laboriosam architecto! Nam quaerat dolore blanditiis.</p>
			<Link href="/ninjas">
				<a>See Ninja listing</a>
			</Link>
		</div>
  )
}
