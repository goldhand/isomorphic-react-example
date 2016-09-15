import React, {Component} from 'react';
import Toggle from './Toggle';


export default class App extends Component {

  constructor(...args) {
    super(...args);
    this.state = {
      active: false,
    }
  }

  handleClick = (e) => {
    this.setState({
      active: !this.state.active,
    });
  }

  render() {

    const activeText = this.state.active
      ? 'We are active!!!'
      : 'Not active';

    return (
      <div>
        <h1>Hello World!</h1>
        <p>{activeText}</p>
        <Toggle handleClick={this.handleClick} />
      </div>
    );
  }
}
