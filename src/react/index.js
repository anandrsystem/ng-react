import React from 'react';

import ListComponent from './components/ListComponent';

const App = (props) => {
  return <div>
    This is React App.
    <br /><br />
    <ListComponent itemsList={props.itemsList} />
  </div>
}

export default App;