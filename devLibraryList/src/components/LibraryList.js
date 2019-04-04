import React from 'react';
import { connect } from 'react-redux';
import { ScrollView, FlatList } from 'react-native';
import PropTypes from 'prop-types';

import ListItem from './ListItem';

const LibraryList = ({ libraries }) => (
  <ScrollView>
    <FlatList
      data={libraries}
      renderItem={({ item }) => <ListItem item={item} />}
      keyExtractor={item => item.id.toString()}
    />
  </ScrollView>
);

const mapStateToProps = ({ libraries }) => ({ libraries });

LibraryList.propTypes = {
  libraries: PropTypes.arrayOf(PropTypes.shape()).isRequired,
};

export default connect(mapStateToProps)(LibraryList);
