import {Container, Label, Select, Option} from './styles';

const Filters = ({filterName, data, selected, handleChange}) => {
  if (data) {
    return (
      <Container>
        <Label htmlFor={filterName}>Choose a {filterName}:</Label>
        <Select name={filterName} id={filterName} onChange={handleChange}>
          <Option value="">Select a {filterName}...</Option>
          {data.map(item => (
            <Option key={item.id} value={item.id}>
              {item.name}
            </Option>
          ))}
        </Select>
      </Container>
    );
  }

  return null;
};

export default Filters;
