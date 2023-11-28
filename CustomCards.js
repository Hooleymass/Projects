import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Card, Text } from 'react-native-elements';

const styles = StyleSheet.create({
  card: {
    // Add card styles here
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  separatorRow: {
    flexDirection: 'row',
    marginTop: 10,
  },
  separator: {
    flex: 1,
    borderBottomWidth: 2,
  },
  buttonContainer: {
    marginTop: 20,
    padding: 10,
  },
  buttonRow: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  button: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ccc',
    marginRight: 2,
    padding: 5,
  },
  buttonText: {
    fontSize: 22,
    fontWeight: 'bold',
    textDecorationLine: 'underline',
  },
  smallButtonText: {
    fontSize: 12,
    textDecorationLine: 'underline',
  },
});

const CustomCard = () => (
  <Card style={styles.card}>
    <Text style={styles.title}>Looking for More?</Text>
    <View style={styles.separatorRow}>
      <View style={[styles.separator, { borderBottomColor: 'pink' }]} />
      <View style={[styles.separator, { borderBottomColor: '#ccc', flex: 3 }]} />
    </View>
    <View style={styles.buttonContainer}>
      <View style={styles.buttonRow}>
        <View style={styles.button}>
          <Text style={styles.buttonText}>Entertainment</Text>
        </View>
        <View style={[styles.button, { flex: 1 }]}>
          <Text style={styles.smallButtonText}>Politics</Text>
        </View>
      </View>
      <View style={styles.buttonRow}>
        <View style={[styles.button, { flex: 1 }]}>
          <Text style={styles.smallButtonText}>Sports</Text>
        </View>
        <View style={[styles.button, { flex: 2 }]}>
          <Text style={[styles.buttonText, { fontSize: 20, fontWeight: 'bold' }]}>Uncategorized</Text>
        </View>
      </View>
    </View>
  </Card>
);

export default CustomCard;

