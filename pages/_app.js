import '../styles/globals.css'
import '../styles/Home.scss'
import '../styles/Header.scss'
import '../styles/Checkout.scss'
import '../styles/Login.scss'
import { useRouter } from 'next/router'
import Header from '../Components/Header'
import { StateProvider } from '../lib/StateProvider'
import reducer, { initialState } from '../lib/reducer'

export const Layout = (props) => {
  const router = useRouter();
  const { singleProduct } = router.query;
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
    case `/${singleProduct}`:
      return (<>
        <Header />
        {props.children}
      </>)
    case `/login`:
      return (<>
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
    <StateProvider initialState={initialState} reducer={reducer}>
      <Layout >
        <Component {...pageProps} />
      </Layout>
    </StateProvider>
  </>)
}

export default MyApp