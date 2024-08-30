import React from 'react';
import './App.css';
import Card from './components/Card/Card';
import Category from './components/Category/Category';
import planDeViajes from './data';

function App() {
  return (
    <>
      <h1>Itinerario</h1>
      <div>
        <Category classname="category1"
          items={planDeViajes.alimentacion}
          type="alimentacion"
        />
        <Category classname="category2"
          items={planDeViajes.hoteles}
          type="hoteles"
        />
        <Category classname="category3"
          items={[planDeViajes.destinosdla.playa, planDeViajes.destinosdla.mar, planDeViajes.destinosdla.argentina]}
          type="destinosdla"
        />
      </div>
    </>
  );
}

export default App;

