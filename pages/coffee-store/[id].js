import React from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import coffeeStoresData from '../../data/coffee-stores.json'
import Head from 'next/head';


export function getStaticProps(staticProps) {
  const params = staticProps.params;
  return {
    props: {
      coffeeStore: coffeeStoresData.find((coffeeStore) => {
        return coffeeStore.id.toString() === params.id
      })
    }
  }
}

export function getStaticPaths() {

  const paths  = coffeeStoresData.map(coffeeStore => {
    return {
      params: {
        id: coffeeStore.id.toString(),
      }
    }
  })

  return {
    paths,
    fallback: false
  }
}

const CoffeeStore = (props) => {

  const router = useRouter()

  if (router.isFallback){
    return (<div>Loading....</div>)
  }

  const { address, name, neighbourhood } = props.coffeeStore

  console.log(router.query.id)
  return (
    <div>
      <Head>
        <title>{name}</title>
      </Head>
      <Link href="/">
        <a>Back to Home</a>
      </Link>
      <p>{address}</p>
      <p>{name}</p>
      <p>{neighbourhood}</p>
    </div>
  )
}

export default CoffeeStore;