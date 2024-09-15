export interface RegisterUserDto {
  name: string;
  password: string;
  rut: string;
  user_type: string;
}

export interface LoginUserDto {
  rut: string;
  password: string;
}
