import ClipLoader from 'react-spinners/ClipLoader';
import List from './List';
import Filters from '../Filters';
import useCars from './hooks';
import {Container} from './styles';
import {light} from '../../styles/colors';

const CarsList = ({makes}) => {
  const {models, loading, handleChange, values, cars} = useCars();

  return (
    <Container>
      <Filters
        filterName="make"
        data={makes}
        selected={values.make}
        handleChange={handleChange}
      />
      <Filters
        filterName="model"
        data={models}
        selected={values.model}
        handleChange={handleChange}
      />
      <List cars={cars} loading={loading} />
      {loading && <ClipLoader size={25} color={light} />}
    </Container>
  );
};

export default CarsList;
