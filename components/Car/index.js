import Link from 'next/link';
import {Container, Title, RowContainer, RowTitle, RowDetail} from './styles';

const Row = ({title, detail}) => (
  <RowContainer>
    <RowTitle>{title}</RowTitle>
    <RowDetail>{detail}</RowDetail>
  </RowContainer>
);

const Car = ({car}) => (
  <Link href="https://carzone.ie">
    <a target="_blank" rel="noopener noreferrer">
      <Container>
        <Title>Name: {car.name}</Title>
        <Row title="Year:" detail={car.year} />
        <Row title="Transmission:" detail={car.transmission} />
        <Row title="Color:" detail={car.base_color} />
        <Row title="Fuel Type:" detail={car.fuel_type} />
      </Container>
    </a>
  </Link>
);

export default Car;
