import React from 'react';
import { post } from '../utils/helper';

import FlashMessage from './FlashMessage';

export default class Form extends React.Component {
  constructor(props) {
    super(props);

    this.defaultState = {
      name: '',
      comments: '',
    };
    this.state = this.defaultState;

    this.setName = this.setName.bind(this);
    this.setComments = this.setComments.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  setName(event) {
    this.setState({
      name: event.target.value
    });
  }

  setComments(event) {
    this.setState({
      comments: event.target.value
    });
  }

  handleSubmit(event) {
    event.preventDefault();

    post('/api/feedbacks', { name: this.state.name, comments: this.state.comments })
    .then(() => {      
      this.setState({
        flash: {
          type: 'success',
          message: 'Feedback received! Thank you for your input.',
        }
      });
      this.setState(this.defaultState);
    })
    .catch(() => {
      this.setState({
        flash: {
          type: 'danger',
          message: 'There was a problem! :( Please try again; we want to hear what you think! (Hint: All fields are required)',
        }
      });
    });
  }

  render() {
    const showFlash = (this.state.flash !== undefined);
    return (
      <form onSubmit={this.handleSubmit}>
        <FlashMessage showFlash={showFlash} flash={this.state.flash} />
        <div className='form-group'>
          <label htmlFor='feedback_name'>Your name:</label>
          <input
            type='text'
            className='form-control'
            placeholder='Daenerys Targaryen'
            id='feedback_name'
            value={this.state.name}
            onChange={this.setName}
          />
        </div>

        <div className='form-group'>
          <label htmlFor='feedback_comments'>Comments:</label>
          <textarea className='form-control' id='feedback_comments' value={this.state.comments} onChange={this.setComments} />
        </div>

        <button type='submit' className='btn btn-primary'>Submit</button>
      </form>
    );
  }
}

Form.propTypes = {};

