import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import { Context as QuestionFormContext } from '../../context/QuestionFormContext';
import Question6Screen from '../Question6Screen';
import { QUIZ_CONSTANTS } from '../constants/quizConstants';
import { SafeAreaProvider } from 'react-native-safe-area-context';

const question6 = QUIZ_CONSTANTS[1];

describe('Question6Screen', () => {
  const mockNavigation = {
    navigate: jest.fn(), //TODO
  };

  const mockQuestionFormState = {
    //TODO
  };

  const mockUpdateQuestionFormState = jest.fn(); //TODO

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders the screen correctly', () => {
    const { getByText } = render(
      <QuestionFormContext.Provider
          value={{
          state: mockQuestionFormState,
          updateQuestionFormState: mockUpdateQuestionFormState,
          }}
      >
          <Question6Screen navigation={mockNavigation} />
      </QuestionFormContext.Provider>
    );

    expect(getByText('NEXT QUESTION')).toBeDefined();
    expect(getByText(question6.question)).toBeDefined();
    expect(getByText(question6.options[0].text)).toBeDefined();
    expect(getByText(question6.options[1].text)).toBeDefined();
    expect(getByText(question6.options[2].text)).toBeDefined();
    expect(getByText(question6.options[3].text)).toBeDefined();
  });

  it('handles answer selection successfully', () => {
    const { getByText } = render(
      <QuestionFormContext.Provider
          value={{
          state: mockQuestionFormState,
          updateQuestionFormState: mockUpdateQuestionFormState,
          }}
      >
          <Question6Screen navigation={mockNavigation} />
      </QuestionFormContext.Provider>
    );

    fireEvent.press(getByText(question6.options[0].text));
    expect(mockUpdateQuestionFormState).toHaveBeenCalledWith({ 1: {id: question6.options[0].id, scoreValue: question6.options[0].scoreValue, text: question6.options[0].text } });

    fireEvent.press(getByText(question6.options[1].text));
    expect(mockUpdateQuestionFormState).toHaveBeenCalledWith({ 1: {id: question6.options[1].id, scoreValue: question6.options[1].scoreValue, text: question6.options[1].text } });

    fireEvent.press(getByText(question6.options[2].text));
    expect(mockUpdateQuestionFormState).toHaveBeenCalledWith({ 1: {id: question6.options[2].id, scoreValue: question6.options[2].scoreValue, text: question6.options[2].text } });

    fireEvent.press(getByText(question6.options[3].text));
    expect(mockUpdateQuestionFormState).toHaveBeenCalledWith({ 1: {id: question6.options[3].id, scoreValue: question6.options[3].scoreValue, text: question6.options[3].text } });
  });

  it('navigates to the next question on submit', () => {
    const { getByText } = render(
      <QuestionFormContext.Provider
        value={{
          state: mockQuestionFormState
        }}
      >
        <Question6Screen navigation={mockNavigation} />
      </QuestionFormContext.Provider>
    );

    fireEvent.press(getByText('NEXT QUESTION'));
    expect(mockNavigation.navigate).toHaveBeenCalled;
  });
});