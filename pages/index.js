import Head from 'next/head';
import CarsList from '../components/CarsList';
import {ToastContainer} from 'react-toastify';
import styles from '../styles/Home.module.css';
 import 'react-toastify/dist/ReactToastify.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <CarsList />
      <ToastContainer />
    </div>
  );
}
