// Import necessary components and styles
import React from 'react';
import { ScrollView, View, StyleSheet } from 'react-native';
import { MenuProvider } from 'react-native-popup-menu';
import {
  HeaderComponent,
  WhiteComponent,
  PinkComponent,
  MainComponent,
  FooterComponent,
} from './components';
import InlineMenu from './InlineMenu';
import DateComponent from './DateComponent';

const Raynews = () => {
  return (
    <MenuProvider style={styles.container}>
      <HeaderComponent />
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <WhiteComponent>
          <DateComponent />
        </WhiteComponent>
        <PinkComponent />
        <WhiteComponent>
          <InlineMenu />
        </WhiteComponent>
        <MainComponent />
        <FooterComponent />
      </ScrollView>
    </MenuProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollContainer: {
    flexGrow: 1,
    paddingBottom: 100,
  },
});

export default Raynews;

