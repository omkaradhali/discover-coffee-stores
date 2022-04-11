import Head from 'next/head'
import Image from 'next/image'
import Banner from '../components/banner'
import Card from '../components/card'
import styles from '../styles/Home.module.css'
import coffeeStoresData from '../data/coffee-stores.json'

export async function getStaticProps(context) {

  return {
    props: {
      coffeeStores: coffeeStoresData,
    },
  };
}

export default function Home({ coffeeStores }) {

  const handleOnBannerBtnClick = (event) => {
    console.log("button clicked")
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Coffee Connoisseur</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Banner buttonText="View stores nearby" handleOnClick={handleOnBannerBtnClick} />
        <div className={styles.heroImage}>
          <Image src="/static/hero-image.png" width={700} height={400} alt="herp-image"/>
        </div>
        {coffeeStores.length > 0 && 
          <>
            <h2 className={styles.heading2}>New York Coffee Stores</h2>
            <div className={styles.cardLayout}>
              {coffeeStores.map((coffeeStore) => {
                return (
                  <Card 
                    name={coffeeStore.name} 
                    imgUrl={coffeeStore.imgUrl}
                    href={`/coffee-store/${coffeeStore.id}`}
                    className={styles.card}
                    key = {coffeeStore.id}
                  />
                )
              })} 
            </div>
          </>
        }
      </main>
    </div>
  )
}
