import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react-native';
import { Context as QuestionFormContext } from '../../context/QuestionFormContext';
import Question2Screen from '../Question2Screen';
import { QUIZ_CONSTANTS } from '../../constants/quizConstants';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';

const question2 = QUIZ_CONSTANTS[1];

describe('Question2Screen', () => {
  const mockNavigation = {
    navigate: jest.fn()
  };

  it('renders the screen correctly', async() => {
    render(
      <SafeAreaProvider>
        <QuestionFormContext.Provider>
          <NavigationContainer>
            <Question2Screen navigation={mockNavigation} />
          </NavigationContainer>
        </QuestionFormContext.Provider>
      </SafeAreaProvider>
    );

    expect(screen.findByText('NEXT QUESTION')).toBeDefined();
    expect(screen.findByText(question2.question)).toBeDefined();
    expect(screen.findByText(question2.options[0].text)).toBeDefined();
    expect(screen.findByText(question2.options[1].text)).toBeDefined();
    expect(screen.findByText(question2.options[2].text)).toBeDefined();
    expect(screen.findByText(question2.options[3].text)).toBeDefined();
  });

  //TODO it('handles answer selection successfully', () => {});
  //TODO it('navigates to the next question on submit', () => {});
  //TODO it ('navigates to previous question on swipe', () => {});
});