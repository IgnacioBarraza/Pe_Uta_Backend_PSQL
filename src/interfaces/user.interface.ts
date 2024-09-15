export interface RegisterUserDto {
  name: string;
  password: string;
  rut: string;
}

export interface LoginUserDto {
  rut: string;
  password: string;
}
