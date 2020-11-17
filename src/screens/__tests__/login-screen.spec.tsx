import React from 'react';

import { initialState } from '../../store/reducers/auth';
import { renderWithRedux } from '../../utils/redux-test-render';
import LoginScreen from '../login-screen';

const makeSut = () => {
  const { getByText, getAllByText, getByPlaceholderText } = renderWithRedux(<LoginScreen />, {
    state: { ...initialState },
  });

  return {
    getByText,
    getAllByText,
    getByPlaceholderText,
  };
};

describe('Login Screen', () => {
  test('Should start with correct initial state', () => {
    const sut = makeSut();
    const emailInput = sut.getByPlaceholderText('Seu e-mail');
    const passwordInput = sut.getByPlaceholderText('Sua senha');
    expect(emailInput.props.value).toBe('');
    expect(passwordInput.props.value).toBe('');
    expect(emailInput.props.style[0].borderColor).toBe('#cecece');
    expect(passwordInput.props.style[0].borderColor).toBe('#cecece');
    expect(passwordInput.props.value).toBe('');
    expect(emailInput.children.length).toEqual(1);
    expect(passwordInput.children.length).toEqual(1);
  });
});
