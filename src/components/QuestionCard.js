import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import PropTypes from 'prop-types';

const QuestionCard = ({ 
  buttonText,
  onSelect,
  onSubmit,
  options,  
  questionText,
  selectedOption
}) => {
  const isSelected = (option) => {
    return selectedOption?.id === option.id;
  }

  return (
    <View style={styles.cardContainer}>
      <View style={styles.card}>
        <View style={styles.questionTextContainer}>
          <Text
            numberOfLines={5}
            adjustsFontSizeToFit
            style={styles.questionText}
          >
            {questionText}
          </Text>
        </View>

        <View style={styles.optionsContainer}>
          {options.map((option) => (
            <TouchableOpacity
              onPress={() => onSelect(option)}
              key={option.id}>
              <View style={styles.optionContainer}>
                <View style={styles.radioButton}>
                  <View style={isSelected(option) ? styles.radioButtonIconSelected : {} }></View>
                </View>
                <Text 
                  style={styles.optionText}
                  numberOfLines={1}
                  adjustsFontSizeToFit={true}
                > 
                  {option.text}
                </Text>
              </View>
            </TouchableOpacity>
          ))}
        </View>
      </View>

      <View style={styles.submitButtonContainer}>
        <TouchableOpacity
          disabled={!selectedOption}
          style={selectedOption ? styles.submitButton : styles.submitButtonDisabled}
          onPress={() => onSubmit()}>        
          <Text style={selectedOption ? styles.submitButtonText : styles.submitButtonTextDisabled}>
            {buttonText}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

QuestionCard.propTypes = {
  buttonText: PropTypes.string,
  onSelect: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(PropTypes.object).isRequired,
  questionText: PropTypes.string,
  selectedOption: PropTypes.object,
}

const styles = StyleSheet.create({
  cardContainer: {
    alignItems: 'center',
    minWidth: '85%',
    maxWidth: '85%',
  },
  card: {
    borderColor: '#9db1be',
    borderWidth: 5,
    backgroundColor: 'white',
    paddingHorizontal: 40,
    justifyContent: 'center',
    height: '70%',
  },
  questionTextContainer: {
    borderBottomColor: '#9db1be',
    borderBottomWidth: 5,
    justifyContent: 'center',
    height: '45%',
    flexShrink: 1
  },
  questionText: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    textTransform: 'uppercase',
    letterSpacing: 2,
  },
  optionsContainer: {
    justifyContent: 'center',
    marginHorizontal: 30,
    paddingVertical: 20,
  },
  optionContainer: {
    flexDirection: 'row',
    paddingVertical: 3
  },
  optionText: {
    paddingVertical: 5,
    fontSize: 22,
    paddingLeft: 10,
    flexShrink: 1
  },
  radioButton: {
    height: 24,
    width: 24,
    backgroundColor: 'white',
    borderRadius: 15,
    borderWidth: 3,
    borderColor: '#9db1be',
    alignItems: "center",
    justifyContent: "center",
    marginTop: 5
  },
  radioButtonIconSelected: {
    height: 10,
    width: 10,
    borderRadius: 7,
    backgroundColor: '#9db1be'
  },
  submitButtonContainer: {
    alignItems: "center",
    width: '100%'
  },
  submitButton: {
    backgroundColor: "#9db1be",
    borderRadius: 30,
    borderWidth: 1,
    borderColor: "#9db1be",
    width: '70%',
    alignItems: "center",
  },
  submitButtonDisabled: {
    backgroundColor: "#cccccc",
    borderRadius: 30,
    borderWidth: 1,
    borderColor: "#cccccc",
    width: '70%',
    alignItems: "center",
  },
  submitButtonTextDisabled: {
    fontWeight: 'bold',
    fontSize: 16,
    paddingVertical: 12,
    letterSpacing: 2,
    color: '#a6a6a6'
  },
  submitButtonText: {
    fontWeight: 'bold',
    fontSize: 16,
    paddingVertical: 12,
    letterSpacing: 2,
  },
})

export default QuestionCard;
