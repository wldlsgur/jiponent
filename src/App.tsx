import React from 'react';
import useLocalStorage from './libs/hooks/useLocalStorage/index';

const App = () => {
  const { value, setItem } = useLocalStorage({
    key: 'hi',
    defaultValue: '123',
    onError: () => console.log('hi'),
  });

  return <h1 onClick={() => setItem('변경')}>{value}</h1>;
};

export default App;
