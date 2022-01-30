import { useState, useCallback } from 'react';

const useInput = (initialData) => {
    const [value, setValue] = useState(initialData);
    const handleValue = useCallback((e) => {
        setValue(e.target.value);
    }, []);
    return [value, handleValue, setValue];
};
export default useInput;
