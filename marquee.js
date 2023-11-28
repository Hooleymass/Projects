import { Text, View  } from 'react-native';
import MarqueeView from 'react-native-marquee-view';
import breakingNewsData from './breakingNews.json';
const Ma = () => {
  const headlines = breakingNewsData.map((item, index) => (
    <View key={index} style={{ marginRight: 30 }}>
      <Text>{item.headline}</Text>
    </View>
  ));

  return (
    <MarqueeView
      style={{
        width: 400,
	flexDirection: 'row',
	alignItems: 'center',
      }}>
     <View style={{ flexDirection: 'row', alignItems: 'center'}}>
      {headlines}
     </View>
    </MarqueeView>
  );
}

export default Ma;

