// import React from 'react';
import { useState } from 'react';

import { Menu } from './Menu';
import { Categories } from './Categories';

import items from './data';

// guardamos las categorías únicas de los items, los cuales serán los botones
const allCategories = ['all', ...new Set( items.map( item => item.category ))]; 

// componente
function App() {

  // hook useState
  const [ menuItems, setMenuItem ] = useState( items );
  // const [ categories, setCategories ] = useState( allCategories );

  // fn que muestra las categorías
  const filterItems = category => {

    if( category === 'all') return setMenuItem( items );

    // comparamos los items de la data con los items del useState
    const newItems = items.filter( item => item.category === category);

    setMenuItem( newItems );

  }
  
  return (
    <main>
      <section className="menu section">
        <div className="title">
          <h2>nuestro menú</h2>
          <div className="underline"></div>
        </div>
        {/* componentes */}
        <Categories categories={ allCategories } filterItems={ filterItems } />
        <Menu items={ menuItems } />
      </section>
    </main>
  );
}

export default App;
