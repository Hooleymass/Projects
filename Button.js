import React from 'react';
import { View, Text, StyleSheet, TouchableWithoutFeedback } from 'react-native';

const Button = ({ onPress, isMenuOpen }) => {
  const styles = StyleSheet.create({
    menuText: {
      color: 'white',
      fontSize: 16,
    },
    menuButton: {
      zIndex: 1,
      paddingHorizontal: 10,
      paddingVertical: 5,
      borderWidth: 1,
      borderStyle: 'solid',
      borderColor: 'white',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: isMenuOpen ?  'rgba(100, 100, 100, 0.5)' : '#f4baae', // transparent/#0000ffff/#0000000 when closed
    },
  });

  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.menuButton}>
        <Text style={styles.menuText}>{isMenuOpen ? 'Close' : 'Menu'}</Text>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default Button;

