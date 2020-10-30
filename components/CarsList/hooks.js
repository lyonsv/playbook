import {useEffect, useState} from 'react';
import {makesList} from '../../services/makes';

const MAKES_MODELS = {
  toyota: ['prius', 'camry', 'corolla'],
  ford: ['taurus', 'f-150', 'crown victoria'],
  volvo: ['taurus', 'f-150', 'crown victoria'],
};

const useCars = () => {
  const [models, setModels] = useState();
  const [makes, setMakes] = useState();
  const [selectedMake, setSelectedMake] = useState();
  const [selectedModel, setSelectedModel] = useState();
  const [loading, setLoading] = useState(true);
  const [loadingModels, setLoadingModels] = useState(true);

  const handleChange = event => {
    setSelectedMake(event.target.value);
    setModels(MAKES_MODELS[selectedMake]);
  };

  const handleChangeModel = event => {
    setSelectedModel(event.target.value);
    setLoadingModels(false)
  };

  useEffect(() => {
    const loadMakes = async () => {
      try {
        setMakes(['volvo', 'toyota', 'ford']);
        setLoading(false);
      } catch (err) {
        console.log(err);
      }
    };

    loadMakes();
  }, []);

  return {
    makes,
    models,
    handleChange,
    selectedMake,
    selectedModel,
    handleChangeModel,
    loadingModels
  };
};

export default useCars;
