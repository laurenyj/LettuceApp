import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react-native';
import { Context as QuestionFormContext } from '../../context/QuestionFormContext';
import Question3Screen from '../Question3Screen';
import { QUIZ_CONSTANTS } from '../../constants/quizConstants';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';

const question3 = QUIZ_CONSTANTS[2];

describe('Question3Screen', () => {
  const mockNavigation = {
    navigate: jest.fn()
  };

  it('renders the screen correctly', async() => {
    render(
      <SafeAreaProvider>
        <QuestionFormContext.Provider>
            <NavigationContainer>
              <Question3Screen navigation={mockNavigation} />
            </NavigationContainer>
        </QuestionFormContext.Provider>
      </SafeAreaProvider>
    );

    expect(screen.findByText('NEXT QUESTION')).toBeDefined();
    expect(screen.findByText(question3.question)).toBeDefined();
    expect(screen.findByText(question3.options[0].text)).toBeDefined();
    expect(screen.findByText(question3.options[1].text)).toBeDefined();
    expect(screen.findByText(question3.options[2].text)).toBeDefined();
    expect(screen.findByText(question3.options[3].text)).toBeDefined();
  });

  //TODO it('handles answer selection successfully', () => {});
  //TODO it('navigates to the next question on submit', () => {});
  //TODO it ('navigates to previous question on swipe', () => {});
});