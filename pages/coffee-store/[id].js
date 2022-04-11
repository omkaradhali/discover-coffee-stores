import React from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import coffeeStoresData from '../../data/coffee-stores.json'


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
  return {
    paths: [
      { params: {id: "0"} },
      { params: {id: "1"} },
      { params: {id: "300"} }
    ],
    fallback: false
  }
}

const CoffeeStore = (props) => {

  const router = useRouter()

  console.log(router.query.id)
  return (
    <div>
      <p>Coffee Store page at location {router.query.id}</p>
      <Link href="/">
        <a>Back to Home</a>
      </Link>
      <Link href="/coffee-store/dynamic">
        <a>Go to page dynamic</a>
      </Link>
      <p>{props.coffeeStore.address}</p>
      <p>{props.coffeeStore.name}</p>
    </div>
  )
}

export default CoffeeStore;