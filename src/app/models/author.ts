export interface IAuthor {
  name: string;
  id: string;
}
export interface IGetAuthorsResponse {
  successful: boolean;
  result: IAuthor[];
}
