export interface LoginError {}

export interface DetailError {}

export interface Error {
  email: string;
  password: string;
  detail: string;
  status: number | null;
}
