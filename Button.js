// Button.js
import React, {useState} from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const Button = () => {

  const styles = StyleSheet.create({
    menuText: {
      color: 'white',
      fontSize: 16,
    },
  menuButton: {
    position: 'absolute',
    top: 0.1,
    right: 1,
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f4baae',
  },
  closeButton: {
    backgroundColor: 'rgba(255, 182, 193, 0.7)',
  },
  });

const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  const handleMenuClose = () => {
    setMenuOpen(false);
  };

  return (
      <View onPress={toggleMenu} style={styles.menuButton}>
        {isMenuOpen ? (
          <View style={[styles.menuButton, styles.closeButton]}>
            <Text style={styles.menuText}>Close</Text>
          </View>
        ) : (
          <View style={styles.menuButton}>
            <Text style={styles.menuText}>Menu</Text>
          </View>
        )}
      </View>
  );
}

export default Button;
