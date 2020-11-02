import styled from 'styled-components';
import {xLight, gray4} from '../../styles/colors';
import {H3, H5} from '../../styles/typography';

const Container = styled.div`
  width: 100%;
  max-width: 500px;
  background: ${xLight};
  border-radius: 5px;
  padding: 2rem;
  box-shadow: 0 15px 60px rgba(23, 64, 128, 0.1),
    0 5px 10px rgba(0, 41, 105, 0.05);
  transform: scale(0.9);
  transition: 0.1s ease-out;
  &:hover {
    transition: 0.1s ease-in;
    cursor: pointer;
    transform: scale(1.05);
  }
`;

const Title = styled(H3)``;
const RowContainer = styled.div`
  display: flex;
`;
const RowTitle = styled(H5)`
  color: ${gray4};
`;

const RowDetail = styled(H5)`
  margin-left: 1rem;
`;

export {Container, Title, RowContainer, RowTitle, RowDetail};
