import React from 'react'
import { useRouter } from 'next/router'
import Head from 'next/head';
import store from '../lib/store';

const SingleProduct = () => {
  const router = useRouter();
  const { singleProduct } = router.query
  console.log(store)
  return (<>
    <Head>
      <title>Amazon Challenge - {singleProduct}</title>
      <meta name="description" content="Amazon Shoping App" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <div>
      Are you looking for {singleProduct}?
    </div>
  </>)
}

export default SingleProduct