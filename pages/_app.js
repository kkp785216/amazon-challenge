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
import '../styles/AmazonThanks.scss'
import '../styles/YourOrders.scss'
import '../styles/Breadcrumb.scss'
import { useContext, useEffect } from 'react'
import { useRouter } from 'next/router'
import Header from '../Components/Header'
import { StateProvider, StateContext } from '../lib/StateProvider'
import reducer, { initialState } from '../lib/reducer'
import action from '../lib/action'

export const Layout = (props) => {
  const router = useRouter();
  const { singleProduct } = router.query;
  const [state, dispatch] = useContext(StateContext);

  useEffect(() => {
    process.browser && !state.loginUser.logedIn && window.localStorage.getItem('user_amazon_challenge') && action(dispatch, {
      type: 'DEFAULT_LOGIN',
      user: window.localStorage.getItem('user_amazon_challenge')
    });
  }, []);

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
    case `/amazon-thanks`:
      return (<>
        <Header />
        {props.children}
      </>)
    case `/your-orders`:
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