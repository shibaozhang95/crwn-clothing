export interface UserState {
  currentUser: null | User
  error: null | UserError
}

export interface User {
  id: any
  email: string 
  displayName: string 
  createAt: Date
}

export interface SignUpUserCredentials {
  displayName: string
  email: string
  password: string 
}

export interface UserError {
  a: any 
  code: string 
  message: string 
}

export interface EmailAndPassword {
  email: string 
  password: string 
}

export const SET_CURRENT_USER = "SET_CURRENT_USER";
export const GOOGLE_SIGN_IN_START = "GOOGLE_SIGN_IN_START";
export const EMAIL_SIGN_IN_START = "EMAIL_SIGN_IN_START";
export const SIGN_IN_SUCCESS = "SIGN_IN_SUCCESS";
export const SIGN_IN_FAILURE = "SIGN_IN_FAILURE";
export const CHECK_USER_SESSION = "CHECK_USER_SESSION";
export const SIGN_OUT_START = "SIGN_OUT_START";
export const SIGN_OUT_SUCCESS = "SIGN_OUT_SUCCESS";
export const SIGN_OUT_FAILURE = "SIGN_OUT_FAILURE";
export const SIGN_UP_START = "SIGN_UP_START";
export const SIGN_UP_SUCCESS = "SIGN_UP_SUCCESS";
export const SIGN_UP_FAILURE = "SIGN_UP_FAILURE";

export interface SetCurrentUserAction {
  type: typeof SET_CURRENT_USER
  payload: User
}

export interface GoogleSignInStartAction {
  type: typeof GOOGLE_SIGN_IN_START
}

export interface EmailSignInStartAction {
  type: typeof EMAIL_SIGN_IN_START
  payload: EmailAndPassword
}

export interface SignInSuccessAction {
  type: typeof SIGN_IN_SUCCESS
  payload: User
}

export interface SignInFailureAction {
  type: typeof SIGN_IN_FAILURE
  payload: UserError
}

export interface CheckUserSessionAction {
  type: typeof CHECK_USER_SESSION
}

export interface SignOutStartAction {
  type: typeof SIGN_OUT_START
}

export interface SingOutSuccessAction {
  type: typeof SIGN_OUT_SUCCESS
}

export interface SignOutFailureAction {
  type: typeof SIGN_OUT_FAILURE
  payload: UserError
}

export interface SignUpStartAction {
  type: typeof SIGN_UP_START;
  payload: SignUpUserCredentials;
}

// TODO
export interface SignUpSuccessAction {
  type: typeof SIGN_UP_SUCCESS;
  payload: any;
}

export interface SignUpFailureAction {
  type: typeof SIGN_UP_FAILURE;
  payload: UserError;
}

export type UserActionTypes =
  | SetCurrentUserAction
  | GoogleSignInStartAction
  | EmailSignInStartAction
  | SignInSuccessAction
  | SignInFailureAction
  | CheckUserSessionAction
  | SignOutStartAction
  | SingOutSuccessAction
  | SignOutFailureAction
  | SignUpStartAction
  | SignUpSuccessAction
  | SignUpFailureAction;
