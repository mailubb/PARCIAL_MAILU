// src/App.js
import React from 'react';
import './App.css';
import Category from './components/Category/Category';
import planDeViajes from './data';

function App() {
  return (
    <>
      <h1>Itinerario</h1>
      <div className="categories-container">
        <h1>Alimentación</h1>
        <Category
          className="category1"
          items={planDeViajes.alimentacion}
          type="alimentacion"
        />
        <h1>Hoteles</h1>
        <Category
          className="category2"
          items={planDeViajes.hoteles}
          type="hoteles"
        />
        <h1>Lugares</h1>
        <Category
          className="category3"
          items={[
            planDeViajes.destinosdla.playa,
            planDeViajes.destinosdla.mar,
            planDeViajes.destinosdla.argentina
          ]}
          type="destinosdla"
        />
      </div>
    </>
  );
}

export default App;


