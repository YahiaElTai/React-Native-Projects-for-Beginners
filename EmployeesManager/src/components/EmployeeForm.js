import React from 'react';
import { View, Text, Picker, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { CardSection, Input } from './common';
import * as actions from '../actions';

const styles = StyleSheet.create({
  pickerLabelStyles: {
    fontSize: 18,
    paddingLeft: 20,
    color: '#000',
  },
});

const EmployeeForm = ({ name, phone, shift, employeeUpdate }) => (
  <View>
    <CardSection>
      <Input
        label="Name"
        placeholder="Jane"
        value={name}
        onChangeText={value => employeeUpdate({ prop: 'name', value })}
      />
    </CardSection>

    <CardSection>
      <Input
        label="Phone"
        placeholder="555-555-5555"
        value={phone}
        onChangeText={value => employeeUpdate({ prop: 'phone', value })}
      />
    </CardSection>

    <CardSection style={{ flexDirection: 'column' }}>
      <Text style={styles.pickerLabelStyles}>Shift</Text>
      <Picker
        style={{ width: 320, marginLeft: 10 }}
        selectedValue={shift}
        onValueChange={value => employeeUpdate({ prop: 'shift', value })}
      >
        <Picker.Item label="Monday" value="Monday" />
        <Picker.Item label="Tuesday" value="Tuesday" />
        <Picker.Item label="Wendesday" value="Wendesday" />
        <Picker.Item label="Thursday" value="Thursday" />
        <Picker.Item label="Friday" value="Friday" />
        <Picker.Item label="Saturday" value="Saturday" />
        <Picker.Item label="Sunday" value="Sunday" />
      </Picker>
    </CardSection>
  </View>
);

EmployeeForm.propTypes = {
  name: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
  shift: PropTypes.string.isRequired,
  employeeUpdate: PropTypes.func.isRequired,
};

const mapStateToProps = state => {
  const { name, phone, shift } = state.employeeForm;

  return { name, phone, shift };
};

export default connect(
  mapStateToProps,
  actions,
)(EmployeeForm);
