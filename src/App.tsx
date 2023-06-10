import React from 'react';
import Select from './components/Select/Select';

const header = 'Models';
const elements = ['BMW', 'Lada', 'Audi', 'VeryLoooooooongCarName', 'https://logodownload.org/wp-content/uploads/2014/04/mercedes-benz-logo-0.png'];

const App = () => (
  <Select isOpen header={header} elements={elements} />
);

export default App;
