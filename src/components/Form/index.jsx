import React from 'react';

import './Form.scss';

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: '',
    };
  }

  handleChange = (event) => {
    this.setState({ inputValue: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    console.log('Form submitted with value:', this.state.inputValue);
    this.setState({ showModal: true });
    this.setState({ inputValue: '' });
  };

  componentDidMount() {
    console.log('Component mounted');
  }

  componentDidUpdate() {
    console.log('Component updated');
  }

  componentWillUnmount() {
    console.log('Component will unmount');
  }

  render() {
    return (
      <>
        <form className="actionForm" onSubmit={this.handleSubmit}>
          <input
            type="text"
            value={this.state.inputValue}
            onChange={this.handleChange}
            placeholder="Enter the value..."
          />
          <button type="submit">Submit</button>
        </form>
      </>
    );
  }
}

export default Form;
