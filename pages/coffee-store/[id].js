import React from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';

const CoffeeStore = () => {

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
    </div>
  )
}

export default CoffeeStore;