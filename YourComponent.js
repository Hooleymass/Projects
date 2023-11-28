import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import TextTicker from 'react-native-text-ticker';
import breakingNewsData from './breakingNews.json';

const Example = () => {
  const headlines = breakingNewsData.map((item, index) => (
    <React.Fragment key={item.id}>
      <Text>{item.headline}</Text>
      {index < breakingNewsData.length - 1 && <Text>&nbsp;</Text>}
    </React.Fragment>
  ));

  return (
    <View style={styles.container}>
      <TextTicker
        style={{ fontSize: 16 }}
        duration={3000}
        loop
        bounce
        repeatSpacer={50}
        marqueeDelay={1000}
      >
        {headlines}
      </TextTicker>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Example;

