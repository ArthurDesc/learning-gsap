export type User = {
  id: string;
  name: string;
  email: string;
};
 
export type ApiResponse<T> = {
  data: T | null;
  error: string | null;
}; 