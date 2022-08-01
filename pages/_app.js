import '../styles/globals.css'
import '../styles/Home.scss'
import '../styles/Header.scss'
import '../styles/Checkout.scss'
import Header from '../Components/Header'
import { useRouter } from 'next/router'

export const Layout = (props) => {
  const router = useRouter()
  switch (router.asPath) {
    case '/':
      return (<>
        <Header />
        {props.children}
      </>)
    case '/checkout':
      return (<>
        <Header />
        {props.children}
      </>)
    default:
      return (<>
        {props.children}
      </>)

  }
}

function MyApp({ Component, pageProps }) {
  return (<>
    <Layout >
      <Component {...pageProps} />
    </Layout>
  </>)
}

export default MyApp