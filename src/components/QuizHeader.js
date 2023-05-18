import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const QuizHeader = () => {
  return (
    <View style={styles.header}>
      <Text style={styles.headerTitle}> QUIZ </Text>
      
      <Text style={styles.headerText}>
        Take our quiz to find out where you should go for dinner.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    padding: 40,
  },
  headerTitle: {
    fontSize: 60,
    fontWeight: 'bold',
    letterSpacing: 10,
  },
  headerText: {
    fontSize: 20,
    marginTop: 10
  },
});

export default QuizHeader;