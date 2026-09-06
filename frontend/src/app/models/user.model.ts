export interface User {
  id: number;
  email: string;
  name: string;
}

export interface AuthResponse {
  data: {
    access_token: string;
    user: User;
  };
}

export interface RegisterResponse {
  data: User;
}
