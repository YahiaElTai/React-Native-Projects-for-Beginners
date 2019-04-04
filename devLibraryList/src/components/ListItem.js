import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableWithoutFeedback,
  UIManager,
  LayoutAnimation,
  StyleSheet,
} from 'react-native';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import * as actions from '../actions';
import { CardSection } from './common';

const styles = StyleSheet.create({
  textStyles: {
    color: '#000',
    fontSize: 17,
    paddingLeft: 10,
  },
});

class LibraryList extends Component {
  componentWillUpdate() {
    // eslint-disable-next-line no-unused-expressions
    UIManager.setLayoutAnimationEnabledExperimental &&
      UIManager.setLayoutAnimationEnabledExperimental(true);
    LayoutAnimation.spring();
  }

  renderDescription() {
    const { item, expanded } = this.props;
    if (expanded) {
      return <Text>{item.description}</Text>;
    }
    return null;
  }

  render() {
    const { textStyles } = styles;
    const {
      item: { id, title },
      selectLibrary,
      expanded,
    } = this.props;

    return (
      <View>
        <TouchableWithoutFeedback
          // calling selectLibrary() will default to payload null and will hide detail
          onPress={() => (expanded ? selectLibrary() : selectLibrary(id))}
        >
          <View>
            <CardSection>
              <Text style={textStyles}>{title}</Text>
            </CardSection>
            <CardSection>{this.renderDescription()}</CardSection>
          </View>
        </TouchableWithoutFeedback>
      </View>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  const expanded = state.selectedLibraryId === ownProps.item.id;
  return { expanded };
};

LibraryList.propTypes = {
  item: PropTypes.shape().isRequired,
  expanded: PropTypes.bool.isRequired,
  selectLibrary: PropTypes.func.isRequired,
};

export default connect(
  mapStateToProps,
  actions,
)(LibraryList);
