import React from 'react';
import { Header, Icon } from 'react-native-elements';
import { Text } from 'react-native';
import { Menu, MenuTrigger, MenuOptions, MenuOption } from 'react-native-popup-menu';
import Button from '../Button';

const HeaderComponent = () => {
  return (
    <Header
      leftComponent={{ icon: 'menu', color: '#fff' }}
      centerComponent={{ text: 'Your App Name', style: { color: '#fff' } }}
      rightComponent={
        <Menu>
          <MenuTrigger>
            <Button />
          </MenuTrigger>
          <MenuOptions>
            <MenuOption onSelect={() => alert('Option 1')}>
              <Text>Option 1</Text>
            </MenuOption>
            <MenuOption onSelect={() => alert('Option 2')}>
              <Text>Option 2</Text>
            </MenuOption>
          </MenuOptions>
        </Menu>
      }
      containerStyle={{
        backgroundColor: '#333333', // rgb(51,51,51,255)
        justifyContent: 'space-around',
      }}
    />
  );
};

export default HeaderComponent;

