import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import { Context as QuestionFormContext } from '../../context/QuestionFormContext';
import Question2Screen from '../Question2Screen';
import { QUIZ_CONSTANTS } from '../constants/quizConstants';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Swiper, SwiperSlide } from 'swiper/react';

const question2 = QUIZ_CONSTANTS[1];

describe('Question2Screen', () => {
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
          <Question2Screen navigation={mockNavigation} />
      </QuestionFormContext.Provider>
    );

    expect(getByText('NEXT QUESTION')).toBeDefined();
    expect(getByText(question2.question)).toBeDefined();
    expect(getByText(question2.options[0].text)).toBeDefined();
    expect(getByText(question2.options[1].text)).toBeDefined();
    expect(getByText(question2.options[2].text)).toBeDefined();
    expect(getByText(question2.options[3].text)).toBeDefined();
  });

  it('handles answer selection successfully', () => {
    const { getByText } = render(
      <QuestionFormContext.Provider
          value={{
          state: mockQuestionFormState,
          updateQuestionFormState: mockUpdateQuestionFormState,
          }}
      >
          <Question2Screen navigation={mockNavigation} />
      </QuestionFormContext.Provider>
    );

    fireEvent.press(getByText(question2.options[0].text));
    expect(mockUpdateQuestionFormState).toHaveBeenCalledWith({ 1: {id: question2.options[0].id, scoreValue: question2.options[0].scoreValue, text: question2.options[0].text } });

    fireEvent.press(getByText(question2.options[1].text));
    expect(mockUpdateQuestionFormState).toHaveBeenCalledWith({ 1: {id: question2.options[1].id, scoreValue: question2.options[1].scoreValue, text: question2.options[1].text } });

    fireEvent.press(getByText(question2.options[2].text));
    expect(mockUpdateQuestionFormState).toHaveBeenCalledWith({ 1: {id: question2.options[2].id, scoreValue: question2.options[2].scoreValue, text: question2.options[2].text } });

    fireEvent.press(getByText(question2.options[3].text));
    expect(mockUpdateQuestionFormState).toHaveBeenCalledWith({ 1: {id: question2.options[3].id, scoreValue: question2.options[3].scoreValue, text: question2.options[3].text } });
  });

  it('navigates to the next question on submit', () => {
    const { getByText } = render(
      <QuestionFormContext.Provider
        value={{
          state: mockQuestionFormState
        }}
      >
        <Question2Screen navigation={mockNavigation} />
      </QuestionFormContext.Provider>
    );

    fireEvent.press(getByText('NEXT QUESTION'));
    expect(mockNavigation.navigate).toHaveBeenCalled;
  });
});