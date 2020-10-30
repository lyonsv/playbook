import Head from 'next/head';
import GlobalStyles from '../../styles/global';
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {Container} from './styles';

const App = ({children}) => (
  <Container>
    <Head>
      <title>Cars List</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <GlobalStyles />
    {children}
    <ToastContainer />
  </Container>
);

export default App;
