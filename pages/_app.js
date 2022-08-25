import '../styles/globals.scss'
import '../styles/Home.scss'
import '../styles/Header.scss'
import '../styles/Checkout.scss'
import '../styles/Login.scss'
import '../styles/LoginFooter.scss'
import '../styles/SignUp.scss'
import '../styles/Address.scss'
import '../styles/Payment.scss'
import '../styles/PlaceOrder.scss'
import { useRouter } from 'next/router'
import Header from '../Components/Header'
import { StateProvider } from '../lib/StateProvider'
import reducer, { initialState } from '../lib/reducer'

export const Layout = (props) => {
  const router = useRouter();
  const { singleProduct } = router.query;
  switch (router.pathname) {
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
    case `/address-process`:
      return (<>
        <Header />
        {props.children}
      </>)
    case `/payment-process`:
      return (<>
        <Header />
        {props.children}
      </>)
    case `/place-order-process`:
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
    <StateProvider initialState={initialState} reducer={reducer}>
      <Layout >
        <Component {...pageProps} />
      </Layout>
    </StateProvider>
  </>)
}

export default MyApp