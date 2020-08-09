import React from 'react';
import Dropdown from './Dropdown';
import Tooltip from './ToolTip';

//  App as Class Component
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      hover: false,
      direction: 'top',
    };
  }
  handleMouseIn = () => {
    console.log('hovered in');
    this.setState({ hover: true });
  };

  handleMouseOut = () => {
    console.log('hovered out');
    this.setState({ hover: false });
  };

  render() {
    const { direction, hover } = this.state;
    return (
      <div className="App">
        <h2 id="heading">Test The ToolTip</h2>
        <Dropdown />
        <Tooltip
          hover={hover}
          onMouseIn={this.handleMouseIn}
          onMouseOut={this.handleMouseOut}
        />
      </div>
    );
  }
}

export default App;
