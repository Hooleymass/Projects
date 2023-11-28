import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const PinkComponent = () => {
	return(
		<View style={styles.pinkContainer}>
		<View style={styles.pinkLeftContainer}>
		<Text style={styles.pinkLeftText}>Raynewsroom</Text>
		<Text style={styles.pinkSubLeftText}>Your number one channel</Text>
		</View>
		<View style={styles.pinkRightContainer}>
		<Text style={styles.pinkRightText}>Search</Text>
		</View>
	</View>
	);
  
};

const styles = StyleSheet.create({
  pinkContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 15,
    height: 140,
    backgroundColor: '#f8bbb0',
  },
  pinkLeftContainer: {
    alignItems: 'flex-start',
  },
  pinkLeftText: {
    fontSize: 45,
    color: '#030202',
    marginBottom: 3,
    fontWeight: 'bold',
  },
  pinkSubLeftText: {
    fontSize: 14,
    color: '#160505',
  },
  pinkRightContainer: {
    alignItems: 'flex-end',
    marginTop: 40,
  },
  pinkRightText: {},
  inlineMenu: {
    flexDirection: 'row',
    marginTop: 40,
  },
});

export default PinkComponent;

