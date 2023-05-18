import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react-native';
import { Context as QuestionFormContext } from '../../context/QuestionFormContext';
import Question4Screen from '../Question4Screen';
import { QUIZ_CONSTANTS } from '../../constants/quizConstants';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';

const question4 = QUIZ_CONSTANTS[3];

describe('Question4Screen', () => {
  const mockNavigation = {
    navigate: jest.fn()
  };

  it('renders the screen correctly', async() => {
    render(
      <SafeAreaProvider>
        <QuestionFormContext.Provider>
            <NavigationContainer>
              <Question4Screen navigation={mockNavigation} />
            </NavigationContainer>
        </QuestionFormContext.Provider>
      </SafeAreaProvider>
    );

    expect(screen.findByText('NEXT QUESTION')).toBeDefined();
    expect(screen.findByText(question4.question)).toBeDefined();
    expect(screen.findByText(question4.options[0].text)).toBeDefined();
    expect(screen.findByText(question4.options[1].text)).toBeDefined();
    expect(screen.findByText(question4.options[2].text)).toBeDefined();
    expect(screen.findByText(question4.options[3].text)).toBeDefined();
  });

  //TODO it('handles answer selection successfully', () => {});
  //TODO it('navigates to the next question on submit', () => {});
  //TODO it ('navigates to previous question on swipe', () => {});
});