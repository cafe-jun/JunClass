export interface Users {
  id: string;
  name: string;
  age: number;
  gender: UsersGender;
}

export enum UsersGender {
  MAN = 'MAN',
  WOMAN = 'WOMAN'
}
