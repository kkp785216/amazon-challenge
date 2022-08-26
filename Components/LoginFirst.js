import React from 'react'
import Link from 'next/link'

const LoginFirst = () => {
  return (
    <div><Link href="/login"><a className='hyperlink'>Please login first</a></Link></div>
  )
}

export default LoginFirst