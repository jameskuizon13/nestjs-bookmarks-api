import { Injectable } from '@nestjs/common';
import { DatabaseService } from '../database/database.service';

@Injectable({})
export class AuthService {
  constructor(private databaseService: DatabaseService) {}

  signup() {
    return 'I am sign up 1';
  }

  signin() {
    return 'I am sign in';
  }
}
