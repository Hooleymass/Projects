// MainComponent.js
import React from 'react';
import { View, Text, Image, TouchableOpacity, Linking } from 'react-native';
import { Icon } from 'react-native-elements';
import data from '../data/data.json';

const MainComponent = () => {
  return (
    <>
      {data.map(blogPost => (
        <View key={blogPost.id} style={{ margin: 10, borderBottomWidth: 1, paddingBottom: 10 }}>
          <Image
            source={{ uri: blogPost.image }}
            style={{ width: '100%', height: 200 }}
          />
          {blogPost.video ? (
            <Icon
              name="play-circle"
              type="font-awesome"
              color="#f4baae"
              size={30}
              containerStyle={{ position: 'absolute', top: 10, right: 10 }}
            />
          ) : (
            <Icon
              name="image"
              type="font-awesome"
              color="#f4baae"
              size={30}
              containerStyle={{ position: 'absolute', top: 10, right: 10 }}
            />
          )}
          <Text style={{ fontSize: 20, fontWeight: 'bold', marginTop: 10 }}>
            {blogPost.title}
          </Text>
          <View style={{ flexDirection: 'row', marginTop: 5 }}>
            {blogPost.tags.map(tag => (
              <TouchableOpacity key={tag} onPress={() => Linking.openURL(`/tags/${tag}`)}>
                <Text style={{ marginRight: 5, color: 'gray' }}>
                  #{tag}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
          <Text style={{ color: 'gray', marginTop: 5 }}>
            {blogPost.date} | By {blogPost.author} | {blogPost.comments} Comments
          </Text>
          <Text>{blogPost.content.slice(0, 200)}...</Text>
          <TouchableOpacity
            style={{
              padding: 5,
              borderRadius: 5,
              alignItems: 'center',
              marginTop: 10,
              backgroundColor: '#f4baae',
              padding: 10,
              borderRadius: 5,
              alignItems: 'center',
	      width: '25%',
            }}
            onPress={() => Linking.openURL(blogPost.readMoreLink)}
          >
            <Text style={{ color: 'white' }}>Read More</Text>
          </TouchableOpacity>
        </View>
      ))}
    </>
  );
};

export default MainComponent;
