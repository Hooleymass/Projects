import React, { useState } from 'react';
import { Text, View } from 'react-native';
import { Header } from 'react-native-elements';
import { Menu, MenuTrigger, MenuOptions, MenuOption } from 'react-native-popup-menu';
import Button from '../Button';

const HeaderComponent = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  const handleOptionSelect = (option) => {
    alert(option);
    setMenuOpen(false);
  };

  const menuStyles = {
    optionsContainer: {
      marginTop: 1,
    },
    optionsWrapper: {
      padding: 10,
    },
  };
  const textStyles = {
    color: 'black',
    fontSize: 14,
    left: 15,
    paddingVertical: 14,
  };

  return (
    <Header
      rightComponent={
        <View>
          <Button onPress={toggleMenu} isMenuOpen={isMenuOpen} />
          <Menu opened={isMenuOpen} onBackdropPress={toggleMenu}>
            <MenuTrigger />
            <MenuOptions customStyles={menuStyles}>
              <MenuOption onSelect={() => handleOptionSelect('Home')}>
                <Text style={textStyles}>Home</Text>
              </MenuOption>
              <MenuOption onSelect={() => handleOptionSelect('Sports')}>
                <Text style={textStyles}>Sports</Text>
              </MenuOption>
              <MenuOption onSelect={() => handleOptionSelect('Entertainment')} >
                <Text style={textStyles}>Entertainment</Text>
              </MenuOption>
            </MenuOptions>
          </Menu>
        </View>
      }
      containerStyle={{
        backgroundColor: '#333333',
        justifyContent: 'space-around',
      }}
	  lighting="dark"
    />
  );
};

export default HeaderComponent;

