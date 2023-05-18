import React, { useContext } from 'react';
import SafeAreaView from 'react-native-safe-area-view';
import { Image, ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Context as QuestionFormContext } from '../context/QuestionFormContext';
import QuizHeader from '../components/QuizHeader';

const ResultsScreen = ({ navigation }) => {
  const { state: questionFormState, resetQuestionFormState } = useContext(QuestionFormContext);

  const score = Object.keys(questionFormState).reduce((a, questionKey) => { 
    return a + questionFormState[questionKey].scoreValue 
  },0); 

  const calculateResults = () => {
    if (score >= 22 && score <= 26) {
      return "RPM Seafood";
    } else if (score >= 17 && score <= 21) {
      return "Hub 51";
    } else if (11 <= score &&  score < 16) {
      return "Beatrix";
    } else if (score >= 6 && score <= 10) {
      return "Tallboy";
    }
  }

  const BEATRIX = require('../../assets/beatrix.png');
  const RPM = require('../../assets/rpm.png');
  const HUB51 = require('../../assets/hub51.png');
  const TALLBOY = require('../../assets/tallboy.png');

  const handleSubmit = () => {
    resetQuestionFormState(() => {
      navigation.navigate('Question1')
    }) ;
  };

  if (score == 0) { return null; }

  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground source={require('../../assets/pattern.jpg')} style={styles.appContainer}>
        <QuizHeader/>

        <View style={styles.card}>
          <View style={styles.cardHeader}>
            <Text style={styles.cardHeaderText}>
              {calculateResults()}
            </Text>
          </View>
          <View style={styles.cardBody}>
            {calculateResults() == "RPM Seafood" && <Image source={RPM} style={styles.image}/>}
            {calculateResults() == "Hub 51" && <Image source={HUB51} style={styles.image}/>}
            {calculateResults() == "Beatrix" && <Image source={BEATRIX} style={styles.image}/>}
            {calculateResults() == "Tallboy" && <Image source={TALLBOY} style={styles.image}/>}
          </View>
        </View>

        <View style={styles.submitButtonContainer}>
          <TouchableOpacity
            style={styles.submitButton}
            onPress={() => handleSubmit()}>        
            <Text style={styles.submitButtonText}>RETAKE QUIZ</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  appContainer: {
    flex: 1,
    alignItems: 'center'
  },
  card: {
    borderColor: '#9db1be',
    borderWidth: 5,
    backgroundColor: 'white',
    paddingHorizontal: 40,
    justifyContent: 'center',
    height: '55%',
    minWidth: '85%',
    maxWidth: '85%',
  },
  cardBody: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  cardHeaderText: {
    fontSize: 36,
    fontWeight: 'bold',
    textAlign: 'center',
    letterSpacing: 2,
  },
  submitButtonContainer: {
    alignItems: "center",
    width: '100%',
  },
  submitButton: {
    backgroundColor: "#9db1be",
    borderRadius: 30,
    borderWidth: 1,
    borderColor: "#9db1be",
    width: '70%',
    alignItems: "center",
  },
  submitButtonText: {
    fontWeight: 'bold',
    fontSize: 16,
    paddingVertical: 12,
    letterSpacing: 2,
  },
  image: {
    height: '80%',
    width: '80%'
  }
})

export default ResultsScreen;