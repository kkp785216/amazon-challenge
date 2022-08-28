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
import { useEffect } from 'react'
import { useRouter } from 'next/router'
import Header from '../Components/Header'
import store from '../redux/store'
import { Provider } from 'react-redux'
import { useSelector, useDispatch } from 'react-redux'
import action from '../redux/action'

export const Layout = (props) => {
  const router = useRouter();
  const dispatch = useDispatch();
  const { singleProduct } = router.query;
  const { loginUser } = useSelector(state => state);

  useEffect(() => {
    process.browser && !loginUser.logedIn && window.localStorage.getItem('user_amazon_challenge') &&
    dispatch(action({
      type: 'DEFAULT_LOGIN',
      user: window.localStorage.getItem('user_amazon_challenge')
    }));
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
    <Provider store={store}>
      <Layout >
        <Component {...pageProps} />
      </Layout>
    </Provider>
  </>)
}

export default MyApp