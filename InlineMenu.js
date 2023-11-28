import React from 'react';
import { ScrollView, StyleSheet, Text } from 'react-native';
import { menuItems } from './menuItem';

const InlineMenu = () => {
  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={true} >
      {menuItems.map((item, index) => (
        <Text key={index} style={styles.menuItem}>{item.label}</Text>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  menuItem: {
    marginRight: 50,
    marginTop: 40,
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default InlineMenu;


