import React from 'react';
import Dropdown from './Dropdown';
import Tooltip from './ToolTip';

class App extends React.Component {
  render() {
    return (
      <div className="App">
         <h2 id="heading">Test The ToolTip</h2>
        <Dropdown />
        <Tooltip />
      </div>
    );
  }
}

export default App;
