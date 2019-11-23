import Navbar from "./navbar";
import Head from 'next/head';


const Layout = (props) => (
  <div>
    <Head>
      <title>My file upload</title>
    </Head>
    <Navbar />
    {props.children}
  </div>
);

export default Layout;