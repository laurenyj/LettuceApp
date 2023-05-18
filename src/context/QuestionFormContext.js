import createDataContext from './createDataContext';

const DEFAULT_STATE = {}

const questionFormReducer = (state, action) => {
  switch(action.type) {
    case 'update':
      return { ...state, ...action.payload };
    case 'reset':
      return DEFAULT_STATE;
    default:
      return state;
  }
}

const resetQuestionFormState = (dispatch) => {
  return async (callback) => {
    dispatch({
      type: 'reset',
    })

    if (callback) {
      callback();
    }
  }
}

const updateQuestionFormState = (dispatch) => {
  return async (payload, callback) => {
    dispatch({
      type: 'update',
      payload
    })

    if (callback) {
      callback();
    }
  }
}

export const { Context, Provider } = createDataContext(
  questionFormReducer,
  {
    updateQuestionFormState,
    resetQuestionFormState,
  },
  DEFAULT_STATE
)
