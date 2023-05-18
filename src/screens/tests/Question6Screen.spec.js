import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react-native';
import { Context as QuestionFormContext } from '../../context/QuestionFormContext';
import Question6Screen from '../Question6Screen';
import { QUIZ_CONSTANTS } from '../../constants/quizConstants';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';

const question6 = QUIZ_CONSTANTS[5];

describe('Question6Screen', () => {
  const mockNavigation = {
    navigate: jest.fn()
  };

  it('renders the screen correctly', async() => {
    render(
      <SafeAreaProvider>
        <QuestionFormContext.Provider>
            <NavigationContainer>
              <Question6Screen navigation={mockNavigation} />
            </NavigationContainer>
        </QuestionFormContext.Provider>
      </SafeAreaProvider>
    );

    expect(screen.findByText('FINISH')).toBeTruthy();
    expect(screen.findByText(question6.question)).toBeTruthy();
    expect(screen.findByText(question6.options[0].text)).toBeTruthy();
    expect(screen.findByText(question6.options[1].text)).toBeTruthy();
    expect(screen.findByText(question6.options[2].text)).toBeTruthy();
    expect(screen.findByText(question6.options[3].text)).toBeTruthy();
  });

  //TODO it('handles answer selection successfully', () => {});
  //TODO it('navigates to the next question on submit', () => {});
  //TODO it ('navigates to previous question on swipe', () => {});
});