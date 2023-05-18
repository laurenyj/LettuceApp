import { QUIZ_CONSTANTS } from '../quizConstants';

describe('QUIZ_CONSTANTS', () => {
  it('each object should have the correct structure', () => {
    expect(Array.isArray(QUIZ_CONSTANTS)).toBe(true);

    QUIZ_CONSTANTS.forEach((question) => {
      expect(question).toHaveProperty('id');
      expect(question).toHaveProperty('question');
      expect(Array.isArray(question.options)).toBe(true);

      question.options.forEach((option) => {
        expect(option).toHaveProperty('id');
        expect(option).toHaveProperty('text');
        expect(option).toHaveProperty('scoreValue');
      });
    });
  });

  it('should have unique IDs for each question and set of options', () => {
    const questionIds = new Set();
    const optionIds = new Set();

    QUIZ_CONSTANTS.forEach((question) => {
      expect(questionIds.has(question.id)).toBe(false);
      questionIds.add(question.id);

      question.options.forEach((option) => {
        expect(optionIds.has(option.id)).toBe(false);
        optionIds.add(option.id);
      });

      optionIds.clear();
    });
  });
});