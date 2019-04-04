import React from 'react';
import { View, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';

const styles = StyleSheet.create({
  containerStyles: {
    borderWidth: 1,
    borderRadius: 2,
    borderColor: '#ddd',
    borderBottomWidth: 0,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 1,
    marginLeft: 5,
    marginRight: 5,
    marginTop: 10,
  },
});

const Card = ({ children }) => {
  return <View style={styles.containerStyles}>{children}</View>;
};

Card.propTypes = {
  children: PropTypes.node.isRequired,
};

// eslint-disable-next-line import/prefer-default-export
export { Card };
