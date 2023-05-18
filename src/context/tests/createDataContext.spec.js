import React, { useReducer } from 'react';
import createDataContext from '../createDataContext';

describe('createDataContext', () => {
  const reducer = jest.fn();
  const initialState = { count: 0 };
  const actions = {
    increment: jest.fn(),
    decrement: jest.fn(),
  };
  const { Context, Provider } = createDataContext(reducer, actions, initialState);

  test('Context should be a React context', () => {
    expect(Context._currentValue).toEqual(undefined);
  });

  test('Provider should render children', () => {
    const child = <div>Test</div>;
    const { getByText } = render(
      <Provider>{child}</Provider>
    );
    expect(getByText('Test')).toBeInTheDocument();
  });

  test('Provider should initialize state', () => {
    const child = <div>Test</div>;
    const wrapper = shallow(<Provider>{child}</Provider>);
    const provider = wrapper.instance();
    expect(provider.state).toEqual(initialState);
  });

  test('Provider should pass state and bound actions to Context', () => {
    const child = <div>Test</div>;
    const wrapper = shallow(<Provider>{child}</Provider>);
    const value = wrapper.prop('value');
    expect(value.state).toEqual(initialState);
    expect(typeof value.increment).toEqual('function');
    expect(typeof value.decrement).toEqual('function');
  });

  test('bound actions should call dispatch with correct arguments', () => {
    const child = <div>Test</div>;
    const wrapper = shallow(<Provider>{child}</Provider>);
    const { increment, decrement } = wrapper.prop('value');
    increment();
    expect(actions.increment).toHaveBeenCalledWith(expect.any(Function));
    decrement();
    expect(actions.decrement).toHaveBeenCalledWith(expect.any(Function));
  });
});