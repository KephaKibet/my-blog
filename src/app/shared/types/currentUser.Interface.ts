export interface CurrentUserInterface{
  // same as api
  id: number;
  email: string;
  createdAt: string;
  username: string;
  bio: string | null;
  image: string | null;
  token: string;
}