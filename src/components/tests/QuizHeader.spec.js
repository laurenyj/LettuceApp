import React from 'react';
import { render, screen } from '@testing-library/react-native';
import '@testing-library/jest-dom'

import QuizHeader from '../QuizHeader';

describe('QuizHeader', () => {
  it('should render successfully', () => {
    render(<QuizHeader />);
    expect(screen.getByText('QUIZ')).toBeVisible();
    expect(screen.getByText("Take our quiz to find out where you should go for dinner.")).toBeVisible();
  });
});
