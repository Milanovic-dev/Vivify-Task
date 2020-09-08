import React, { useState } from 'react';
import Header from './Header'
import Movies from './Movie/Movies';

const App = () => {
  return (
    <div>
      <Header title='React Movie Cards'/>
      <div className="mt-5">
        <Movies />
      </div>
    </div>
  );
}

export default App;
