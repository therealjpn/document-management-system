import React from 'react';
import { connect } from 'react-redux';
import toastr from 'toastr';
import TextFieldGroup from '../common/TextFieldGroup';
import validateInput from '../../../server/shared/validations/login';
import { login } from '../../actions/authenticationAction';

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      identifier: '',
      password: '',
      errors: {},
      isLoading: false
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  isValid() {
    const { errors, isValid } = validateInput(this.state);

    if (!isValid) {
      return this.setState({ errors });
    }
    return isValid;
  }

  onSubmit(e) {
    e.preventDefault();
    if (this.isValid()) {
      this.setState({ errors: {}, isLoading: true });
      this.props.login(this.state).then(
        res => {
          this.context.router.push('/');
          toastr.success('Logged in Successfully');
        }
      ).catch((err) => {
        this.setState({
          errors: err.response.data.errors,
          isLoading: false
        });
      });
    }
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    const { errors, identifier, password, isLoading } = this.state;
    return (
      <div className="col s8 z-depth-8 card-panel">

        <form className="login-form" onSubmit={this.onSubmit}>

          <div className="row margin">
          <TextFieldGroup
            icon="person_outline"
            field="identifier"
            label="Username / Email"
            value={identifier}
            error={errors.identifier}
            onChange={this.onChange}
            />
          </div>

          <div className="row margin">
          <TextFieldGroup
            icon="lock"
            field="password"
            label="Password"
            value={password}
            error={errors.password}
            onChange={this.onChange}
            type="password"
            />
          </div>

          <div className="row">
            <button disabled={isLoading} className="btn blue-grey center">
              Login<i className="material-icons right">send</i>
            </button>
          {errors.form && toastr.error('Invalid Credentials!')}
          </div>

        </form>
      </div>
    );
  }
}

LoginForm.propTypes = {
  login: React.PropTypes.func.isRequired
};

LoginForm.contextTypes = {
  router: React.PropTypes.object.isRequired
};

export default connect(null, { login })(LoginForm);
