import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react-native';
import { Context as QuestionFormContext } from '../../context/QuestionFormContext';
import Question1Screen from '../Question1Screen';
import { QUIZ_CONSTANTS } from '../../constants/quizConstants';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import '@testing-library/jest-dom'

const question1 = QUIZ_CONSTANTS[0];

describe('Question1Screen', () => {
  const mockNavigation = {
    navigate: jest.fn()
  };

  it('renders the screen correctly', async() => {
    render(
      <SafeAreaProvider>
        <QuestionFormContext.Provider>
            <NavigationContainer>
              <Question1Screen navigation={mockNavigation} />
            </NavigationContainer>
        </QuestionFormContext.Provider>
      </SafeAreaProvider>
    );

    expect(screen.findByText('NEXT QUESTION')).toBeDefined();
    expect(screen.findByText(question1.question)).toBeDefined();
    expect(screen.findByText(question1.options[0].text)).toBeDefined();
    expect(screen.findByText(question1.options[1].text)).toBeDefined();
    expect(screen.findByText(question1.options[2].text)).toBeDefined();
    expect(screen.findByText(question1.options[3].text)).toBeDefined();
  });

  //TODO it('handles answer selection successfully', () => {});
  //TODO it('navigates to the next question on submit', () => {});
});