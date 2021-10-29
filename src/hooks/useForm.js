// write your custom hook here to control your checkout form
import React, { useState }  from 'react';

const initialValue = {
    firstName: '',
    lastName: '',
    address: '',
    city: '',
    state: '',
    zip: ''
};

export const useForm = () => {

    const [showSuccessMessage, setShowSuccessMessage] = useState(false);
    const [values, setValues] = useState(initialValue);

    const handleChanges = (evt) => {
        setValues({...values, [evt.target.name]: evt.target.value });
    }

    const handleSubmit = (evt) => {
        evt.preventDefault();
        setShowSuccessMessage(true);
    };

    return [showSuccessMessage, handleChanges, handleSubmit, values];

}

export default useForm