import React from 'react';
import { render } from '@testing-library/react-native';
import '@testing-library/jest-dom'
import QuizHeader, { styles } from '../QuizHeader';

describe('QuizHeader', () => {
  it('should render successfully with text', () => {
    const { getByText } = render(<QuizHeader />);
    expect(getByText('QUIZ')).toBeTruthy();
    expect(getByText('Take our quiz to find out where you should go for dinner.')).toBeTruthy();
  });

  it('applies the correct styles', () => {
    const { getByTestId } = render(<QuizHeader />);
    const headerContainer = getByTestId('headerContainer');
    expect(headerContainer.props.style).toMatchObject(styles.header);

    const titleText = getByTestId('headerTitle');
    expect(titleText.props.style).toMatchObject(styles.headerTitle);

    const descriptionText = getByTestId('headerText');
    expect(descriptionText.props.style).toMatchObject(styles.headerText);
    
  });
});
