import React from 'react';
import { render } from '@testing-library/react-native';
import '@testing-library/jest-dom'
import QuizHeader from '../QuizHeader';

describe('QuizHeader', () => {
  it('should render successfully with text', () => {
    const { getByText } = render(<QuizHeader />);
    expect(getByText('QUIZ')).toBeTruthy();
    expect(getByText('Take our quiz to find out where you should go for dinner.')).toBeTruthy();
  });
});
