import styled from 'styled-components';
import {lighten} from 'polished';
import {H2, P} from '../../styles/typography';
import {light, dark, accent, xLight} from '../../styles/colors';

const Image = styled.img`
  border-radius: 1000px;
  width: 100px;
  height: 100px;
`;

const Title = styled(H2)`
  text-align: center;
`;

const Subtitle = styled(P)`
  font-size: 1rem;
  margin: 0;
  text-align: center;
`;

const Button = styled.button`
  color: ${light};
  text-transform: uppercase;
  background: ${accent};
  border-radius: 5px;
  padding: 1rem 2rem;
  border: none;
  text-align: center;
  margin-top: 1.5rem;
  transform: scale(0.9);
  transition: 0.1s ease-out;

  &:hover {
    background: ${lighten(0.1, accent)};
    transition: 0.1s ease-in;
    cursor: pointer;
    transform: scale(1.05);
  }
`;

const Container = styled.section`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 60vh;
  background: ${xLight};
  border-radius: 5px;
  width: 500px;
  padding: 2rem;
  box-shadow: 0 15px 60px rgba(23, 64, 128, 0.1),
    0 5px 10px rgba(0, 41, 105, 0.05);
`;

export {Title, Subtitle, Container, Button, Image};
