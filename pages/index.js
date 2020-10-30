import App from '../components/App';
import {makesList} from '../services/makes';
import CarsList from '../components/CarsList';
import ErrorMessage from '../components/ErrorMessage';

const Home = ({makes}) => {
  return (
    <App>{makes.length ? <CarsList makes={makes} /> : <ErrorMessage />}</App>
  );
};

export async function getStaticProps() {
  const makes = await makesList();
  return {
    props: {
      makes: makes.data,
    },
  };
}

export default Home;
