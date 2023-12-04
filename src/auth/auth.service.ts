import { Injectable } from '@nestjs/common';

@Injectable({})
export class AuthService {
  // const service = new AuthService()
  signup() {
    return { message: 'I have signed up' };
  }
  signin() {
    return { message: 'I have signed in' };
  }
}
