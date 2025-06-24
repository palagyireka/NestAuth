export default interface ValidateUserInput {
  email: string;
  password: string;
  rememberMe?: boolean; // Optional field for "Remember Me" functionality
}
