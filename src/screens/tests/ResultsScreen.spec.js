import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react-native';
import { Context as QuestionFormContext } from '../../context/QuestionFormContext';
import ResultsScreen from '../ResultsScreen';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';


describe('ResultsScreen', () => {
  const mockNavigation = {
    navigate: jest.fn()
  };

  it('renders the screen correctly', async() => {
    render(
      <SafeAreaProvider>
        <QuestionFormContext.Provider>
            <NavigationContainer>
              <ResultsScreen navigation={mockNavigation} />
            </NavigationContainer>
        </QuestionFormContext.Provider>
      </SafeAreaProvider>
    );

    expect(screen.findByText('RETAKE QUIZ')).toBeTruthy();
  });

  //TODO it('retake quiz button navigates successfully', () => {});

});