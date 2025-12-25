import { useState, useEffect } from 'react';

// Custom hook for handling outside clicks
export const useClickOutside = (ref, callback) => {
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        callback();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [ref, callback]);
};

// Custom hook for local storage
export const useLocalStorage = (key, initialValue) => {
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.error(`Error reading localStorage key "${key}":`, error);
      return initialValue;
    }
  });

  const setValue = (value) => {
    try {
      const valueToStore = value instanceof Function ? value(storedValue) : value;
      setStoredValue(valueToStore);
      window.localStorage.setItem(key, JSON.stringify(valueToStore));
    } catch (error) {
      console.error(`Error setting localStorage key "${key}":`, error);
    }
  };

  return [storedValue, setValue];
};

// Custom hook for debouncing values
export const useDebounce = (value, delay) => {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return debouncedValue;
};

// Custom hook for async operations
export const useAsync = (asyncFunction, dependencies = []) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let isMounted = true;
    
    const executeAsync = async () => {
      try {
        setLoading(true);
        setError(null);
        const result = await asyncFunction();
        if (isMounted) {
          setData(result);
        }
      } catch (err) {
        if (isMounted) {
          setError(err.message || 'An error occurred');
        }
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    };

    executeAsync();

    return () => {
      isMounted = false;
    };
  }, dependencies);

  return { data, loading, error };
};

// Export form hook
export { useForm } from './useForm';
