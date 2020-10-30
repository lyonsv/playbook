import ClipLoader from 'react-spinners/ClipLoader';
import List from './List';
import Filters from '../Filters';
import useCars from './hooks';
import {Container} from './styles';

const CarsList = () => {
  const {makes, models, loading, handleChange, values, cars} = useCars();

  if (!loading) {
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
        <List cars={cars} />
      </Container>
    );
  }

  return (
    <Container>
      <ClipLoader size={25} color={'#123abc'} />
    </Container>
  );
};

export default CarsList;
