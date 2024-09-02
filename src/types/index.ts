export interface User {
  id: string;
  name: string;
  userName: string;
  email: string;
  phone: number;
}

export interface UserState {
  users: User[];
  isLoading: boolean;
  isError: null | string;
}

export interface IUser {
  users: UserState;
}
