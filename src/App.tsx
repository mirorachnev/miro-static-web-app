import React from 'react';
import './App.css';

const currentVersion = (window as any).APP_VERSION;

const validateVersion = async () => {
  const url = "https://validate-version.azurewebsites.net/api/product";

  const response = await fetch(`${url}/${currentVersion}`);

  if (response.ok) {
    const result = await response.json() as boolean;

    if (result && currentVersion) {
      console.log('same version');
    } else {
      console.log('different version, must reload');

      window.location.reload();
    }
  }  
}

function App() {
  return (
    <>
      <h3>Hello Version - {currentVersion}</h3>
      <br />
      <button onClick={() => validateVersion()}>Check version</button>
    </>
  );
}

export default App;
