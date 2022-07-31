import '../styles/globals.css'
import '../Components/Home/Home.scss'
import '../Components/Header/Header.scss'
import Header from '../Components/Header/Header'

const Layout = (props) => {
  return (<>
    <Header />
    {props.children}
  </>)
}

function MyApp({ Component, pageProps }) {
  return (<>
    <Layout>
      <Component {...pageProps} />
    </Layout>
  </>)
}

export default MyApp
