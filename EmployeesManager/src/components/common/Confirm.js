import React from 'react';
import { Text, View, Modal, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';

import { CardSection } from './CardSection';
import { Button } from './Button';

const styles = StyleSheet.create({
  cardSectionStyle: { justifyContent: 'center' },
  textStyle: {
    flex: 1,
    fontSize: 18,
    textAlign: 'center',
    lineHeight: 40,
  },
  containerStyle: {
    backgroundColor: 'rgba(0, 0, 0, 0.75)',
    position: 'relative',
    flex: 1,
    justifyContent: 'center',
  },
});

const Confirm = ({ children, onAccept, onDecline, visible }) => (
  <Modal
    animationType="slide"
    transparent
    visible={visible}
    onRequestClose={() => {}}
  >
    <View style={styles.containerStyle}>
      <CardSection style={styles.cardSectionStyle}>
        <Text style={styles.textStyle}>{children}</Text>
      </CardSection>

      <CardSection>
        <Button onPress={onAccept}>Yes</Button>
        <Button onPress={onDecline}>No</Button>
      </CardSection>
    </View>
  </Modal>
);

Confirm.propTypes = {
  children: PropTypes.node.isRequired,
  onAccept: PropTypes.func.isRequired,
  onDecline: PropTypes.func.isRequired,
  visible: PropTypes.bool.isRequired,
};

// eslint-disable-next-line import/prefer-default-export
export { Confirm };
