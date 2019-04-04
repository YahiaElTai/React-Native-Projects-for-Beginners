import React, { Component } from 'react';
import { View, Text, TouchableWithoutFeedback, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';

import { CardSection } from './common';

const styles = StyleSheet.create({
  textStyles: {
    color: '#000',
    fontSize: 18,
    paddingLeft: 15,
  },
});

class ListItem extends Component {
  onItemPress = () => {
    const { handleItemPress, employee } = this.props;
    handleItemPress(employee);
  };

  render() {
    const { employee } = this.props;
    return (
      <TouchableWithoutFeedback onPress={this.onItemPress}>
        <View>
          <CardSection>
            <Text style={styles.textStyles}>{employee.name}</Text>
          </CardSection>
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

ListItem.propTypes = {
  employee: PropTypes.shape().isRequired,
  handleItemPress: PropTypes.func.isRequired,
};

export default ListItem;
