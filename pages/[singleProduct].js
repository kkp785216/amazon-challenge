import React, { useEffect } from 'react'
import { useRouter } from 'next/router'

const SingleProduct = () => {
    const router = useRouter();
    const { singleProduct } = router.query


  return (
    <div>
        Are you looking for {singleProduct}?
    </div>
  )
}

export default SingleProduct