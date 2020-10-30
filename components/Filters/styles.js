import styled from 'styled-components';
import {light} from '../../styles/colors';

const Container = styled.div`
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 500px;
`;

const Label = styled.label`
  color: ${light};
  margin-right: 1rem;
  flex: 1;
`;

const Option = styled.option``;

const Select = styled.select`
  width: 100%;
  height: 50px;
  flex: 3;
`;

export {Label, Container, Option, Select};
