import client from './client';

export const signin = ({ email, password }) =>
  client.post('/api/auth/signin', { email, password });

export const signup = ({ email, password, passwordConfirm }) =>
  client.post('/api/auth/signup', { email, password, passwordConfirm });

export const check = () => client.get('/api/auth/check');
