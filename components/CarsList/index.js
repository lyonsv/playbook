import Filters from '../Filters';
import useCars from './hooks';
import {Container} from './styles';

const CarsList = () => {
  const {makes, models, loading, handleChange, selectedMake, handleChangeModel, selectedModel, loadingModels} = useCars();

  return (
    <Container>
      <Filters
        loading={loading}
        makes={makes}
        selectedMake={selectedMake}
        handleChange={handleChange}
      />
        <Filters
          loading={loadingModels}
          makes={models}
          selectedMake={selectedModel}
          handleChange={handleChangeModel}
        />
    </Container>
  );
};

export default CarsList;
