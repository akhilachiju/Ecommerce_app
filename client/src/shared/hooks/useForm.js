import { useState } from 'react';
import { validateEmail, validateRequired } from '../utils';

export const useForm = (initialValues, validationRules = {}) => {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues(prev => ({ ...prev, [name]: value }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleBlur = (e) => {
    const { name } = e.target;
    setTouched(prev => ({ ...prev, [name]: true }));
    validateField(name, values[name]);
  };

  const validateField = (name, value) => {
    const rules = validationRules[name];
    if (!rules) return true;

    let error = '';
    
    if (rules.required && !validateRequired(value)) {
      error = `${name} is required`;
    } else if (rules.email && !validateEmail(value)) {
      error = 'Please enter a valid email';
    } else if (rules.minLength && value.length < rules.minLength) {
      error = `${name} must be at least ${rules.minLength} characters`;
    }

    setErrors(prev => ({ ...prev, [name]: error }));
    return !error;
  };

  const validateForm = () => {
    const newErrors = {};
    let isValid = true;

    Object.keys(validationRules).forEach(field => {
      if (!validateField(field, values[field])) {
        isValid = false;
      }
    });

    return isValid;
  };

  const resetForm = () => {
    setValues(initialValues);
    setErrors({});
    setTouched({});
  };

  return {
    values,
    errors,
    touched,
    handleChange,
    handleBlur,
    validateForm,
    resetForm,
    setValues
  };
};
