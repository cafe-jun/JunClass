import client from './client';

export const signin = ({ email, password }) =>
  client.post('/auth/signin', { email, password });

export const signup = ({ email, password, passwordConfirm }) =>
  client.post('/auth/signup', { email, password, passwordConfirm });

export const check = () => client.get('/auth/check');
