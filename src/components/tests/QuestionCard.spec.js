import React from 'react';
import { fireEvent, render } from '@testing-library/react-native';
import '@testing-library/jest-dom'
import { QUIZ_CONSTANTS } from '../constants/quizConstants';
import QuestionCard from '../QuestionCard';

const question1 = QUIZ_CONSTANTS[0];

describe('QuestionCard', () => {
  const options = question1.options

  const onSelectMock = jest.fn();
  const onSubmitMock = jest.fn();

  it('renders the question text', () => {
    const questionText = question1.question;
    
    const { getByText } = render(
      <QuestionCard
        buttonText="Submit"
        onSelect={onSelectMock}
        onSubmit={onSubmitMock}
        options={options}
        questionText={questionText}
        selectedOption={null}
      />
    );

    expect(getByText(questionText)).toBeTruthy();
  });

  it('renders the options', () => {
    const { getByText } = render(
      <QuestionCard
        buttonText="Submit"
        onSelect={onSelectMock}
        onSubmit={onSubmitMock}
        options={options}
        questionText=""
        selectedOption={null}
      />
    );

    options.forEach((option) => {
      expect(getByText(option.text)).toBeTruthy();
    });
  });

  it('calls the selection function when an option is selected', () => {
    const { getByText } = render(
      <QuestionCard
        buttonText="Submit"
        onSelect={onSelectMock}
        onSubmit={onSubmitMock}
        options={options}
        questionText=""
        selectedOption={null}
      />
    );

    options.forEach((option) => {
      fireEvent.press(getByText(option.text));
      expect(onSelectMock).toHaveBeenCalledWith(option);
    });
  });

  it('calls the submit function when submit button is pressed', () => {
    const { getByText } = render(
      <QuestionCard
        buttonText="Submit"
        onSelect={onSelectMock}
        onSubmit={onSubmitMock}
        options={options}
        questionText=""
        selectedOption={options[0]}
      />
    );

    fireEvent.press(getByText('Submit'));
    expect(onSubmitMock).toHaveBeenCalled();
  });

  it('disables the submit button when no option is selected', () => {
    const { getByText } = render(
      <QuestionCard
        buttonText="Submit"
        onSelect={onSelectMock}
        onSubmit={onSubmitMock}
        options={options}
        questionText=""
        selectedOption={null}
      />
    );

    const submitButton = getByText('Submit');
    expect(submitButton).toBeDisabled;
  });

  it('enables the submit button when an option is selected', () => {
    const { getByText } = render(
      <QuestionCard
        buttonText="Submit"
        onSelect={onSelectMock}
        onSubmit={onSubmitMock}
        options={options}
        questionText=""
        selectedOption={options[0]}
      />
    );

    const submitButton = getByText('Submit');
    expect(submitButton.props.disabled).not.toBeDisabled;
  });
});