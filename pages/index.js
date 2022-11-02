import Head from 'next/head';
import Image from 'next/image';

// components
import Header from '../app/components/Header';
import Banner from '../app/components/Banner';

export default function Home() {
	return (
		<div className=''>
			<Head>
				<title>Airbnb | V2.0</title>
				<link rel='icon' href='/favicon.ico' />
			</Head>

			{/* Header Section */}
			<Header />

			{/* Banner Section */}
			<Banner />
		</div>
	);
}
