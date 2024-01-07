import { useState } from 'react';

// Here we import a helper function that will check if the email is valid
import { validateEmail } from '../utils/helpers';

const btnStyle = {
  backgroundColor: '#AA6DA3',
  borderColor: '#AA6DA3',
}

function Form() {
  // Create state variables for the fields in the form
  // We are also setting their initial values to an empty string
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const [errorMessage, setErrorMessage] = useState('');

  const handleInputChange = (e) => {
    // Getting the value and name of the input which triggered the change
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    if (inputValue === '') {
      setErrorMessage(`${inputType} is required`);
      return;
    }

    // Based on the input type, we set the state of either email, name, and message

    if (inputType === 'name') {
      setName(inputValue);
    } else if (inputType === 'email') {
      setEmail(inputValue);
    } else {
      setMessage(inputValue);
    }
  };

  const handleFormSubmit = (e) => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    e.preventDefault();

    // If any of the fields are empty, display an error message and return
    if (!name) {
      setErrorMessage('Name cannot be empty!');
      return;
    }
    if (!validateEmail(email)) {
      setErrorMessage('Email is invalid');
      return;
    }
    if (!message) {
      setErrorMessage(
        'Message cannot be empty!'
      );
      return;
    }

    // If successful, we want to clear out the input after the message was sent.
    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <div>
      <form onSubmit={handleFormSubmit}>
        <div className="form-group">
          <input
            value={name}
            name="name"
            onChange={handleInputChange}
            type="name"
            placeholder="name"
            required={true}
            className='form-control'
          />
        </div>
        <div className="form-group">
          <input
            value={email}
            name="email"
            onChange={handleInputChange}
            type="email"
            placeholder="email"
            required={true}
            className='form-control'
          />
        </div>
        <div className="form-group">
          <textarea
            value={message}
            name="message"
            onChange={handleInputChange}
            type="message"
            placeholder="message"
            required={true}
            className='form-control'
            rows='4'
          />
        </div>
        <button type="submit" style={btnStyle} className="btn m-2 align-self-start">
          Submit
        </button>
      </form>
      {errorMessage && (
        <div>
          <p className="error-text m-3">{errorMessage}</p>
        </div>
      )}
    </div>
  );
};

export default Form;
