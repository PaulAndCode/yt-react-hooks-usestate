import {useState} from 'react';

const useForm = (initialState) => {
  const [formValues, setFormValue] = useState(initialState);

  const handleChange = (e) => {
    const {name, value, type, checked} = e.target;
    console.log({...e.target});
    setFormValue((prevFormValues) => ({
      ...prevFormValues,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  return {
    handleChange,
    formValues,
  }
};

export default useForm;
