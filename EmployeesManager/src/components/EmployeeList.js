import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, FlatList } from 'react-native';
import PropTypes from 'prop-types';
import _ from 'lodash';

import * as actions from '../actions';
import ListItem from './ListItem';

class EmployeeList extends Component {
  componentWillMount() {
    const { employeesFetch } = this.props;
    employeesFetch();
  }

  handleItemPress = employee => {
    const { navigation } = this.props;
    navigation.navigate('EmployeeEdit', { employee });
  };

  render() {
    const { employees } = this.props;
    return (
      <View>
        <FlatList
          data={employees}
          renderItem={({ item }) => (
            <ListItem employee={item} handleItemPress={this.handleItemPress} />
          )}
          keyExtractor={item => item.uid}
        />
      </View>
    );
  }
}

EmployeeList.propTypes = {
  employeesFetch: PropTypes.func.isRequired,
  employees: PropTypes.arrayOf(PropTypes.shape()).isRequired,
  navigation: PropTypes.shape().isRequired,
};

const mapStateToProps = state => {
  const employees = _.map(state.employees, (val, uid) => ({ ...val, uid }));

  return { employees };
};

export default connect(
  mapStateToProps,
  actions,
)(EmployeeList);
