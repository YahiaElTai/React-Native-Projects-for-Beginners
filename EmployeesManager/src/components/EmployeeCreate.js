import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import * as actions from '../actions';
import { Card, CardSection, Button } from './common';
import EmployeeForm from './EmployeeForm';

class EmployeeCreate extends Component {
  onButtonPress = () => {
    const { name, phone, shift, navigation, employeeCreate } = this.props;
    employeeCreate({
      name,
      phone,
      shift: shift || 'Monday',
      navigation,
    });
  };

  render() {
    return (
      <Card>
        <EmployeeForm {...this.props} />

        <CardSection>
          <Button onPress={this.onButtonPress}>Create</Button>
        </CardSection>
      </Card>
    );
  }
}

const mapStateToProps = ({ employeeForm }) => {
  const { name, phone, shift } = employeeForm;
  return { name, phone, shift };
};

export default connect(
  mapStateToProps,
  actions,
)(EmployeeCreate);

EmployeeCreate.propTypes = {
  name: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
  shift: PropTypes.string.isRequired,
  employeeCreate: PropTypes.func.isRequired,
  navigation: PropTypes.shape().isRequired,
};
