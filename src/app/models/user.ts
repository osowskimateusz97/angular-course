export interface IUser {
  name: string | null;
  email: string;
  password: string;
  id: string;
  role: string;
}
export interface IUserResponse {
  successful: boolean;
  result: IUser;
}
