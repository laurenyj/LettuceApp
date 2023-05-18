import React, { useContext } from 'react';
import SafeAreaView from 'react-native-safe-area-view';
import { ImageBackground, StyleSheet } from 'react-native';
import { Context as QuestionFormContext } from '../context/QuestionFormContext';
import QuestionCard from '../components/QuestionCard';
import QuizHeader from '../components/QuizHeader';
import { QUIZ_CONSTANTS } from '../constants/quizConstants';

const Question4Screen = ({ navigation }) => {
  const { state: questionFormState, updateQuestionFormState } = useContext(QuestionFormContext);
  const question4 = QUIZ_CONSTANTS[3];

  const handleAnswer = (answer) => {
    updateQuestionFormState({ [question4.id]: answer })
  };

  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground source={require('../../assets/pattern.jpg')} style={styles.appContainer}>
        <QuizHeader/>
        
        <QuestionCard
          buttonText={"NEXT QUESTION"}
          onSelect={(option) => handleAnswer(option)}
          onSubmit={() => navigation.navigate('Question5')}
          options={question4.options}
          questionText={question4.question}
          selectedOption={questionFormState[question4.id]}
        />
      </ImageBackground>
    </SafeAreaView>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  appContainer: {
    flex: 1,
    alignItems: 'center'
  }
});

export default Question4Screen;