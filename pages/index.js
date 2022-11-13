import Head from 'next/head';
import Image from 'next/image';

// components
import Header from '../app/components/Header';
import Banner from '../app/components/Banner';
import SmallCard from '../app/components/SmallCard';
import MediumCard from '../app/components/MediumCard';

import ExploreData from '../app/lib/exploreData';
import CardsData from '../app/lib/cardData';
import LargeCard from '../app/components/LargeCard';
import Footer from '../app/components/Footer';

export default function Home({ exploreData, cardsData }) {
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

			{/* Main Section */}
			<main className='max-w-7xl mx-auto px-8 sm:px-16'>
				<section className='pt-6'>
					<h2 className='text-4xl font-semibold pb-5'>
						Explore Nearby
					</h2>

					{/* Pull some data from a server - API endpoints */}
					<div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
						{/* Card */}
						{exploreData?.map((item) => (
							<SmallCard
								key={item.img}
								img={item.img}
								location={item.location}
								distance={item.distance}
							/>
						))}
					</div>
				</section>

				<section>
					<h2 className='text-4xl font-semibold py-8'>
						Live Anywhere
					</h2>

					<div className='flex space-x-3 overflow-scroll scrollbar-hide p-3 -ml-3'>
						{cardsData?.map((item) => (
							<MediumCard
								key={item.img}
								img={item.img}
								title={item.title}
							/>
						))}
					</div>
				</section>

				<LargeCard
					img='https://links.papareact.com/4cj'
					title='The Greatest Outdoors'
					description='Wishlists curated by Airbnb.'
					buttonText='Get Inspired'
				/>
			</main>

			{/* Footer Section */}
			<Footer />
		</div>
	);
}

export async function getStaticProps() {
	// const exploreData = await fetch('https://links.papareact.com/pyp').then(
	// 	(res) => res.json()
	// );

	// const cardsData = await fetch('https://links.papareact.com/zp1').then(
	// 	(res) => res.json()
	// );

	// console.log('Static============>', ExploreData);

	return {
		props: {
			exploreData: ExploreData,
			cardsData: CardsData,
		},
	};
}
