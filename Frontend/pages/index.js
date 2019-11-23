import Fetch from 'isomorphic-unfetch';
import Layout from '../components/layout';

const Index = (props) => (
  <Layout>
    <p>Hello Next.js</p>
    {props.bpi.time.updated}
  </Layout>
)

Index.getInitialProps = async function() {
  const res = await fetch('https://api.coindesk.com/v1/bpi/currentprice.json');
  const data = await res.json();

  return {
    bpi: data.bpi
  }
}

export default Index