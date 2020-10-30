import {useEffect, useState} from 'react';
import {toast} from 'react-toastify';
import {makesList} from '../../services/makes';
import {makesModelsList} from '../../services/models';
import {carsList} from '../../services/cars';

const useCars = () => {
  const [values, setValues] = useState({
    make: '',
    model: '',
  });
  const [models, setModels] = useState(null);
  const [makes, setMakes] = useState(null);
  const [cars, setCars] = useState(null);
  const [loading, setLoading] = useState(true);

  const loadCars = async () => {
    try {
      const response = await carsList(values.make, values.model);

      if (response.ok) {
        setCars(response.data);
      } else {
        toast.error(`An api error occured with status: ${response.status}`);
      }
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

  const loadMakes = async () => {
    try {
      const response = await makesList();
      if (response.ok) {
        setMakes(response.data);
        setLoading(false);
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
    loadMakes();
  }, []);

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
    makes,
    models,
    handleChange,
    values,
    loading,
    cars,
  };
};

export default useCars;
