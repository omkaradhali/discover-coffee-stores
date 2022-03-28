import React from 'react';
import { useRouter } from 'next/router';

const CoffeeStore = () => {

  const router = useRouter()

  console.log(router.query.id)
  return (
    <div>
      <p>Coffee Store page at location {router.query.id}</p>
    </div>
  )
}

export default CoffeeStore;