import {useEffect, useState} from 'react';
import {makesList} from '../../services/makes';
import {makesModelsList} from '../../services/models';

const useCars = () => {
  const [models, setModels] = useState();
  const [makes, setMakes] = useState();
  const [selectedMake, setSelectedMake] = useState();
  const [selectedModel, setSelectedModel] = useState();
  const [loading, setLoading] = useState(true);
  const [loadingModels, setLoadingModels] = useState(true);

  const loadModels = async (makeId) => {
    try {
      const response = await makesModelsList(makeId)
      setModels(response.data)
    } catch (err) {
      console.log(err)
    }
  }

  const handleChange = event => {
    setSelectedMake(event.target.value);
    loadModels(event.target.value)
    setLoadingModels(false)
  };

  const handleChangeModel = event => {
    setSelectedModel(event.target.value);
  };

  useEffect(() => {
    const loadMakes = async () => {
      try {
        const response = await makesList()
        setMakes(response.data);
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
