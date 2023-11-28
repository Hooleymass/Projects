import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Menu, MenuTrigger, MenuProvider, MenuOptions, MenuOption } from 'react-native-popup-menu';

const PopupMenu = ({ onClose }) => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const openMenu = () => setMenuOpen(true);
  const closeMenu = () => {
    setMenuOpen(false);
    onClose(); // Notify the parent component about the menu closure
  };

  const handleMenuItemPress = (menuItem) => {
    // Handle the menu item press
    console.log(`Clicked on ${menuItem}`);
    closeMenu();
  };

  const styles = StyleSheet.create({
    menuButton: {
      paddingHorizontal: 10,
      paddingVertical: 5,
      borderWidth: 1,
      borderStyle: 'solid',
      borderColor: 'white',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'pink',
    },
    closeButton: {
      backgroundColor: 'rgba(255, 182, 193, 0.7)',
    },
    menuText: {
      color: 'white',
      fontSize: 16,
    },
    // ... other styles
  });

  return (
    <MenuProvider style={{ flex: 1, position: 'absolute', top: 20, right: 20 }}>
      <Menu opened={isMenuOpen} onBackdropPress={closeMenu}>
        <MenuTrigger onPress={openMenu}>
          <View style={styles.menuButton}>
            <Text style={[styles.menuText, styles.menuItem]}>
              {isMenuOpen ? 'Close' : 'Menu'}
            </Text>
          </View>
        </MenuTrigger>

        <MenuOptions>
          <MenuOption onSelect={() => handleMenuItemPress('Profile')}>
            <Text style={{ padding: 15 }}>Profile</Text>
          </MenuOption>
          <MenuOption onSelect={() => handleMenuItemPress('My account')}>
            <Text style={{ padding: 15 }}>My account</Text>
          </MenuOption>
          <MenuOption onSelect={() => handleMenuItemPress('Logout')}>
            <Text style={{ padding: 15 }}>Logout</Text>
          </MenuOption>
        </MenuOptions>
      </Menu>
    </MenuProvider>
  );
};

export default PopupMenu;

