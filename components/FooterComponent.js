import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const FooterComponent = () => (
  <View style={styles.footer}>
    <Text>@2023 raynews.co.ke </Text>
  </View>
);

const styles = StyleSheet.create({
  footer: {
    backgroundColor: '#f0f0f0',
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    bottom: 0,
    width: '100%',
  },
});

export default FooterComponent;

