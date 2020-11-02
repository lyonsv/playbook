import styled from 'styled-components';
import {breakpoint} from '../../styles/spacing';

const Container = styled.div`
  padding: 5rem;
  width: 100%;

  @media (max-width: ${breakpoint}) {
    padding: 3rem 1rem;
  }
`;
export {Container};
