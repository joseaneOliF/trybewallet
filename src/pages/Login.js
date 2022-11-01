import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { addEmail } from '../redux/actions';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
      disabled: true,
    };
  }

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({
      [name]: value,
    }, () => this.isEmailValid());
  };

  isEmailValid = () => {
    const { email, password } = this.state;
    const six = 6;
    const regex = /^([a-zA-Z0-9_\-.]+)@([a-zA-Z0-9_\-.]+)\.([a-zA-Z]{2,5})$/;
    if (regex.test(email) && password.length >= six) {
      this.setState({
        disabled: false,
      });
    } else {
      this.setState({
        disabled: true,
      });
    }
  };

  // handleClick = () => {
  //   const { email, password } = this.state;
  //   const { dispatch } = this.props;
  //   const dados = {
  //     email,
  //     password,
  //   };
  //   dispatch(addEmail(dados));
  // };

  render() {
    const { disabled, email } = this.state;
    const { dispatch } = this.props;
    return (
      <>
        <div>Login</div>
        <form>
          <label htmlFor="email">
            <input
              name="email"
              placeholder="email"
              type="text"
              data-testid="email-input"
              onChange={ this.handleChange }
            />
          </label>
          <label htmlFor="password">
            <input
              name="password"
              placeholder="password"
              type="text"
              data-testid="password-input"
              onChange={ this.handleChange }
            />
          </label>
          <Link to="/carteira">
            <button
              type="button"
              disabled={ disabled }
              onClick={ () => dispatch(addEmail(email)) }
            >

              Entrar
            </button>
          </Link>
        </form>
      </>
    );
  }
}

Login.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

// const mapStateToProps = ({}) => ({

// });

export default connect()(Login);
