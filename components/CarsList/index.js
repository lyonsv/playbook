import ClipLoader from 'react-spinners/ClipLoader';
import Filters from '../Filters';
import useCars from './hooks';
import {Container} from './styles';

const CarsList = () => {
  const {
    makes,
    models,
    loading,
    handleChange,
    selectedMake,
    handleChangeModel,
    selectedModel,
    loadingModels,
  } = useCars();

  if (!loading) {
    return (
      <Container>
        <Filters
          filterName="make"
          loading={loading}
          data={makes}
          selected={selectedMake}
          handleChange={handleChange}
        />
        <Filters
          filterName="model"
          loading={loadingModels}
          data={models}
          selected={selectedModel}
          handleChange={handleChangeModel}
        />
      </Container>
    );
  }

  return (
    <Container>
      <ClipLoader size={25} color={'#123abc'} />
    </Container>
  );
};

export default CarsList;
