import React, {Component, PropTypes} from 'react';


export default class Toggle extends Component {

  static propTypes = {
    handleClick: PropTypes.func.isRequired,
  }

  constructor(...args) {
    super(...args);
    this.state = {
      active: false,
    };
  }

  handleClick = (e) => {
    e.preventDefault();
    this.setState({
      active: !this.state.active,
    });
    this.props.handleClick(e);
  }

  render() {

    const btnText = this.state.active
      ? 'Deactivate'
      : 'Activate';

    return (
      <button onClick={this.handleClick}>
        {btnText}
      </button>
    );
  }
}
