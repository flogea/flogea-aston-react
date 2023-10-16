import React, { useRef } from 'react';

import './Form.scss';
import Post from '../Post';

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.inputRef = React.createRef();
    this.state = {
      inputValue: '',
      btnStatus: false,
      posts: [
        'hi there! I`m Katua',
        'I`m 22 y. o.',
        'I`m a 4th year student at SPbSUT',
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis ipsum id consequuntur sapiente, quibusdam necessitatibus sed nihil dicta! Tempora minima ab deleniti inventore, deserunt officia ea numquam fugiat eligendi aliquam.',
      ],
    };
  }

  handleFocusOnInput = (event) => {
    event.preventDefault();
    this.inputRef.current.focus();
  };

  handleChange = (event) => {
    const inpValue = event.target.value;
    this.setState({ inputValue: inpValue });
    inpValue === 'реакт' ? this.setState({ btnStatus: true }) : this.setState({ btnStatus: false });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    console.log('Form submitted with value:', this.state.inputValue);
    this.setState({ showModal: true });
    this.setState((prevState) => ({
      posts: [...prevState.posts, this.state.inputValue],
    }));
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
            ref={this.inputRef}
          />
          <div className="buttons">
            <button className="inverted" onClick={this.handleFocusOnInput}>
              Focus
            </button>
            <button type="submit" disabled={this.state.btnStatus}>
              Submit
            </button>
          </div>
        </form>

        {this.state.posts.map((post, index) => (
          <React.Fragment>
            <Post post={post} key={`${post}_${index}`} />
          </React.Fragment>
        ))}
      </>
    );
  }
}

export default Form;
