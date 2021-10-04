import React from 'react';
import './App.css';
import UseStateForm from './components/UseStateForm';

function App() {
  return (
    <>
      <UseStateForm
        handleSubmit={(formValues) => {
          console.log(formValues);
        }}
      />
    </>
  );
}

export default App;
