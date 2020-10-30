import App from '../components/App';
import {makesList} from '../services/makes';
import CarsList from '../components/CarsList';

const Home = ({makes}) => {
  return (
    <App>
      <CarsList makes={makes} />
    </App>
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
