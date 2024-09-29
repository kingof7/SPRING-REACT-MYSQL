import { SignUpRequestDto } from './request/auth';
import SignInRequestDto from './request/auth/sign-in.request.dto';
const DOMAIN = 'http://localhost:4000';

const API_DOMAIN = `${DOMAIN}/api/v1`;

const SIGN_IN_URL = () => `${API_DOMAIN}/auth/sign-in`;
const SIGN_UP_URL = () => `${API_DOMAIN}/auth/sign-up`;

export const signInRequest = (requestBody: SignInRequestDto) => {

}

export const signUpRequest = (requestBody: SignUpRequestDto) => {
    
}