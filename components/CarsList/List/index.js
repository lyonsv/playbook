import {List as Container, Item} from './styles';

const List = ({cars}) => {
  if (cars) {
    return (
      <Container>
        {cars.map(car => (
          <Item key={car.id}>{car.name}</Item>
        ))}
      </Container>
    );
  }

  return null;
};

export default List;
