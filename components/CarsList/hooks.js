import {useEffect, useState} from 'react';
import {toast} from 'react-toastify';
import {makesModelsList} from '../../services/models';
import {carsList} from '../../services/cars';

const useCars = makes => {
  const [values, setValues] = useState({
    make: '',
    model: '',
  });
  const [models, setModels] = useState(null);
  const [cars, setCars] = useState(null);
  const [loading, setLoading] = useState(null);

  const loadCars = async () => {
    setLoading(true);
    try {
      const response = await carsList(values.make, values.model);

      if (response.ok) {
        setCars(response.data);
      } else {
        toast.error(`An api error occured with status: ${response.status}`);
      }
      setLoading(false);
    } catch (err) {
      console.log(err);
      toast.error(`An error occured in the client.`);
    }
  };

  const loadModels = async () => {
    try {
      const response = await makesModelsList(values.make);

      if (response.ok) {
        setModels(response.data);
      } else {
        toast.error(`An api error occured with status: ${response.status}`);
      }
    } catch (err) {
      console.log(err);
      toast.error(`An error occured in the client.`);
    }
  };

  const handleChange = event => {
    event.persist();
    setValues(values => ({
      ...values,
      [event.target.name]: event.target.value,
    }));
  };

  useEffect(() => {
    if (values.make) {
      loadModels();
    }
  }, [values.make]);

  useEffect(() => {
    if (values.model) {
      loadCars();
    }
  }, [values.model]);

  return {
    models,
    handleChange,
    values,
    loading,
    cars,
  };
};

export default useCars;
