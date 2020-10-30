import List from './List';
import Filters from '../Filters';
import useCars from './hooks';
import {Container} from './styles';

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
    </Container>
  );
};

export default CarsList;
