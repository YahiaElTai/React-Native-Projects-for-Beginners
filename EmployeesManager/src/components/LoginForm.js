import React, { Component } from 'react';
import { Text, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { Card, CardSection, Input, Button, Spinner } from './common';
import * as actions from '../actions';

const styles = StyleSheet.create({
  errorTextStyle: {
    fontSize: 20,
    color: 'red',
    alignSelf: 'center',
  },
});

class LoginForm extends Component {
  onEmailChange = email => {
    const { emailChanged } = this.props;
    emailChanged(email);
  };

  onPasswordChange = password => {
    const { passwordChanged } = this.props;
    passwordChanged(password);
  };

  onButtonPress = () => {
    const { email, password, navigation, loginUser } = this.props;
    loginUser({ email, password, navigation });
  };

  renderButton = () => {
    const { loading } = this.props;
    if (loading) {
      return <Spinner size="large" />;
    }

    return <Button onPress={this.onButtonPress}>Login</Button>;
  };

  render() {
    const { email, password, error } = this.props;
    return (
      <Card>
        <CardSection>
          <Input
            value={email}
            label="Email"
            placeholder="email@gmail.com"
            onChangeText={this.onEmailChange}
          />
        </CardSection>

        <CardSection>
          <Input
            value={password}
            label="Password"
            placeholder="password"
            onChangeText={this.onPasswordChange}
            secureTextEntry
          />
        </CardSection>

        <Text style={styles.errorTextStyle}>{error}</Text>

        <CardSection>{this.renderButton()}</CardSection>
      </Card>
    );
  }
}

LoginForm.propTypes = {
  email: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  error: PropTypes.string.isRequired,
  loading: PropTypes.bool.isRequired,
  emailChanged: PropTypes.func.isRequired,
  passwordChanged: PropTypes.func.isRequired,
  loginUser: PropTypes.func.isRequired,
  navigation: PropTypes.shape().isRequired,
};

const mapStateToProps = ({ auth }) => {
  const { email, password, error, loading } = auth;

  return { email, password, error, loading };
};

export default connect(
  mapStateToProps,
  actions,
)(LoginForm);
