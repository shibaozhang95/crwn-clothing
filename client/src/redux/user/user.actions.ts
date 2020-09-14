import {
  SET_CURRENT_USER,
  GOOGLE_SIGN_IN_START,
  EMAIL_SIGN_IN_START,
  SIGN_IN_SUCCESS,
  SIGN_IN_FAILURE,
  CHECK_USER_SESSION,
  SIGN_OUT_FAILURE,
  SIGN_OUT_START,
  SIGN_OUT_SUCCESS,
  SIGN_UP_FAILURE,
  SIGN_UP_START,
  SIGN_UP_SUCCESS,
  SetCurrentUserAction,
  GoogleSignInStartAction,
  EmailSignInStartAction,
  SignInSuccessAction,
  SignInFailureAction,
  CheckUserSessionAction,
  SignOutStartAction,
  SingOutSuccessAction,
  SignOutFailureAction,
  SignUpStartAction,
  SignUpSuccessAction,
  SignUpFailureAction,
  User, EmailAndPassword, UserError
} from './user.types';

export const setCurrentUser = (user: User): SetCurrentUserAction => ({
  type: SET_CURRENT_USER,
  payload: user
});

export const googleSignInStart = (): GoogleSignInStartAction => ({
  type: GOOGLE_SIGN_IN_START
});

export const emailSignInStart = (emailAndPassword: EmailAndPassword): EmailSignInStartAction => ({
  type: EMAIL_SIGN_IN_START,
  payload: emailAndPassword
});

export const signInSuccess = (user: User): SignInSuccessAction => ({
  type: SIGN_IN_SUCCESS,
  payload: user
});

export const signInFailure = (error: UserError): SignInFailureAction => ({
  type: SIGN_IN_FAILURE,
  payload: error
});

export const checkUserSession = (): CheckUserSessionAction => ({
  type: CHECK_USER_SESSION
});

export const signOutStart = (): SignOutStartAction => ({
  type: SIGN_OUT_START
});

export const signOutSuccess = (): SingOutSuccessAction => ({
  type: SIGN_OUT_SUCCESS
});

export const signOutFailure = (error: UserError): SignOutFailureAction => ({
  type: SIGN_OUT_FAILURE,
  payload: error
});

export const signUpStart = (userCredentials: any): SignUpStartAction => ({
  type: SIGN_UP_START,
  payload: userCredentials
});

export const signUpSuccess = ({ user, additionalData }: any): SignUpSuccessAction => ({
  type: SIGN_UP_SUCCESS,
  payload: { user, additionalData }
});

export const signUpFailure = (error: UserError): SignUpFailureAction => ({
  type: SIGN_UP_FAILURE,
  payload: error
});