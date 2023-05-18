import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Question1Screen from './src/screens/Question1Screen';
import Question2Screen from './src/screens/Question2Screen';
import Question3Screen from './src/screens/Question3Screen';
import Question4Screen from './src/screens/Question4Screen';
import Question5Screen from './src/screens/Question5Screen';
import Question6Screen from './src/screens/Question6Screen';
import ResultsScreen from './src/screens/ResultsScreen';

import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Provider as QuestionFormProvider } from './src/context/QuestionFormContext';

const QuizStack = createStackNavigator();

const QuizRoutes = () => {
  return (
    <SafeAreaProvider>
      <QuestionFormProvider>
        <NavigationContainer>
          <QuizStack.Navigator
            initialRouteName="Question1"
            screenOptions={{
              headerShown: false
            }}
          >
            <QuizStack.Screen
              name="Question1"
              component={Question1Screen}
            />
            <QuizStack.Screen
              name="Question2"
              component={Question2Screen}
            />
            <QuizStack.Screen
              name="Question3"
              component={Question3Screen}
            />
            <QuizStack.Screen
              name="Question4"
              component={Question4Screen}
            />
            <QuizStack.Screen
              name="Question5"
              component={Question5Screen}
            />
            <QuizStack.Screen
              name="Question6"
              component={Question6Screen}
            />
            <QuizStack.Screen
              name="Results"
              component={ResultsScreen}
            />
          </QuizStack.Navigator>
        </NavigationContainer>
      </QuestionFormProvider>
    </SafeAreaProvider>
  )
}

export default QuizRoutes;