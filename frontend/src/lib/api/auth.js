import client from './client';

export const signin = ({ email, password }) =>
  client.post('/auth/signin', { email, password });

export const signup = ({ email, password }) =>
  client.post('/auth/signup', { email, password });

export const check = () => client.get('/auth/check');
