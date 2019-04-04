import React from 'react';
import { View, ActivityIndicator, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';

const styles = StyleSheet.create({
  spinnerStyles: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

const Spinner = ({ size }) => {
  return (
    <View style={styles.spinnerStyles}>
      <ActivityIndicator size={size || 'large'} />
    </View>
  );
};

Spinner.propTypes = {
  size: PropTypes.string.isRequired,
};

// eslint-disable-next-line import/prefer-default-export
export { Spinner };
