import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const InlineComponent = ({ children }) => {
	return(
  <View style={ styles.WhiteComponent }>
	{ children }
  </View>
	);
};

const styles = ({
  WhiteComponent: {
    height: 100,
    backgroundColor: '#fcfcfc',
    justifyContent: 'center',
    paddingLeft: 20,
  },
});

export default InlineComponent;

