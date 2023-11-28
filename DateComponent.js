'use strict'
import React from 'react';
import { SafeAreaView, FlatList, Text, View } from 'react-native';
import { Icon } from 'react-native-elements';
import breakingNewsData from './breakingNews.json';
import Ma from './marquee';

const DateComponent = () => {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <View style={styles.iconContainer}>
          <Icon name='calendar' type='font-awesome' color='pink' size={20} />
        </View>
        <Text style={styles.dateText}>
          {new Date().toLocaleDateString('en-US', {
            month: 'long',
            day: 'numeric',
            year: 'numeric',
          })}
        </Text>
      </View>
      <View style={styles.container}>
        <View style={styles.iconContainer}>
          <Icon name='wifi' type='font-awesome' color='pink' size={20} />
        </View>
            <Text style={{ fontWeight: 'bold' }}>Breaking News: </Text>
	  {/* <View style={{ width: '100%', overflow: 'hidden'}}>
	  <MarqueeLabel  scrollDuration={3.0} >
	     <FlatList
	       data={breakingNewsData}
	       horizontal
	       renderItem={({item}) => <Text>{item.headline}</Text>}
	  />
	  </MarqueeLabel>
	  </View>*/}
	  <Ma />

      </View>
    </SafeAreaView>
  );
};

const styles = {
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
  },
  iconContainer: {
    marginRight: 5,
    marginLeft: 5,
  },
  dateText: {
    fontSize: 14,
  },
  breakingNewsText: {
    fontSize: 16,
  },
  item: {
     flexDirection: 'row',
     alignItems: 'center',
     marginRight: 40,
  },
};

export default DateComponent;

