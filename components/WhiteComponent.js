import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const WhiteComponent = ({ children }) => {
	return(
  <View style={ styles.WhiteComponent }>
	{ children }
  </View>
	);
};

const styles = ({
  WhiteComponent: {
    height: 80,
    backgroundColor: '#fcfcfc',
    justifyContent: 'center',
    paddingLeft: 20,
  },
});

export default WhiteComponent;

