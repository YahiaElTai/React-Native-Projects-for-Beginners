import React from 'react';
import { View, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';

const styles = StyleSheet.create({
  containerStyles: {
    borderBottomWidth: 1,
    padding: 5,
    backgroundColor: '#fff',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    borderColor: '#ddd',
  },
});

const CardSection = ({ children }) => {
  return <View style={styles.containerStyles}>{children}</View>;
};

CardSection.propTypes = {
  children: PropTypes.node,
};

CardSection.defaultProps = {
  children: null,
};

// eslint-disable-next-line import/prefer-default-export
export { CardSection };
