import ClipLoader from 'react-spinners/ClipLoader';
import {List as Container, Item} from './styles';
import Car from '../Car';
import {light} from '../../styles/colors';

const List = ({cars, loading}) => {
  if (!loading && cars) {
    return (
      <Container>
        {cars.map(car => (
          <Item key={car.id}>
            <Car car={car} />
          </Item>
        ))}
      </Container>
    );
  }

  if (loading) {
    return <ClipLoader size={25} color={light} />;
  }

  return null;
};

export default List;
