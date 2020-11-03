import {List as Container, Item} from './styles';
import Car from '../Car';

const List = ({cars}) => {
  if (cars) {
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

  return null;
};

export default List;
