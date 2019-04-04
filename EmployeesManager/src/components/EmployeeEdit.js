import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Communications from 'react-native-communications';

import * as actions from '../actions';
import { Card, CardSection, Button, Confirm } from './common';
import EmployeeForm from './EmployeeForm';

class EmployeeEdit extends Component {
  constructor() {
    super();
    this.state = { showModal: false };
  }

  componentWillMount() {
    const { navigation, employeeUpdate } = this.props;
    _.each(navigation.state.params.employee, (value, prop) => {
      employeeUpdate({ prop, value });
    });
  }

  onButtonPress = () => {
    const { name, phone, shift, navigation, employeeSave } = this.props;
    employeeSave({
      name,
      phone,
      shift,
      uid: navigation.state.params.employee.uid,
      navigation,
    });
  };

  onTextPress = () => {
    const { phone, shift } = this.props;
    Communications.text(phone, `Your upcoming shift is on ${shift}`);
  };

  onFirePress = () => {
    this.setState(prevState => ({ showModal: !prevState.showModal }));
  };

  onDecline = () => {
    this.setState({ showModal: false });
  };

  onAccept = () => {
    const { navigation, employeeDelete } = this.props;
    const { uid } = navigation.state.params.employee;
    employeeDelete({ uid, navigation });
    this.setState({ showModal: false });
  };

  render() {
    const { showModal } = this.state;
    return (
      <Card>
        <EmployeeForm />

        <CardSection>
          <Button onPress={this.onButtonPress}>Save Changes</Button>
        </CardSection>

        <CardSection>
          <Button onPress={this.onTextPress}>Text Schedule</Button>
        </CardSection>

        <CardSection>
          <Button onPress={this.onFirePress}>Fire Employee</Button>
        </CardSection>

        <Confirm
          visible={showModal}
          onAccept={this.onAccept}
          onDecline={this.onDecline}
        >
          Are you sure you want to delete this?
        </Confirm>
      </Card>
    );
  }
}

const mapStateToProps = ({ employeeForm }) => {
  const { name, phone, shift } = employeeForm;
  return { name, phone, shift };
};

EmployeeEdit.propTypes = {
  name: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
  shift: PropTypes.string.isRequired,
  employeeUpdate: PropTypes.func.isRequired,
  employeeSave: PropTypes.func.isRequired,
  employeeDelete: PropTypes.func.isRequired,
  navigation: PropTypes.shape().isRequired,
};

export default connect(
  mapStateToProps,
  actions,
)(EmployeeEdit);
