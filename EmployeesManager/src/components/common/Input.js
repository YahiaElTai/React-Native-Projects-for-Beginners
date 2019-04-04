import React from 'react';
import { TextInput, Text, View, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';

const styles = StyleSheet.create({
  viewStyles: {
    height: 40,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  labelStyles: {
    fontSize: 16,
    paddingLeft: 20,
    color: '#000',
    flex: 1,
  },
  inputStyles: {
    color: '#000',
    fontSize: 16,
    flex: 2,
  },
});

const Input = ({
  label,
  value,
  secureTextEntry,
  onChangeText,
  placeholder,
}) => {
  const { viewStyles, labelStyles, inputStyles } = styles;

  return (
    <View style={viewStyles}>
      <Text style={labelStyles}>{label}</Text>
      <TextInput
        secureTextEntry={secureTextEntry}
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
        underlineColorAndroid="transparent"
        style={inputStyles}
      />
    </View>
  );
};

Input.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  secureTextEntry: PropTypes.bool,
  onChangeText: PropTypes.func.isRequired,
  placeholder: PropTypes.string.isRequired,
};

Input.defaultProps = {
  secureTextEntry: false,
};

// eslint-disable-next-line import/prefer-default-export
export { Input };
