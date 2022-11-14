export interface ICourse {
  title: string;
  description: string;
  creationDate: string;
  duration: number;
  authors: string[];
  id: string;
}
export interface IGetCourseResponse {
  successful: boolean;
  result: ICourse[];
}
