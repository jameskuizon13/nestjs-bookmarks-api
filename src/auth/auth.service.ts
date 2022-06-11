import { ForbiddenException, Injectable } from '@nestjs/common';
import { PrismaClientKnownRequestError } from '@prisma/client/runtime';
import * as argon from 'argon2';

import { DatabaseService } from '../database/database.service';
import { AuthDto } from './dto';

@Injectable({})
export class AuthService {
  constructor(private databaseService: DatabaseService) {}

  async signup(dto: AuthDto) {
    // generate the password hash
    const hash = await argon.hash(dto.password);

    try {
      const user = await this.databaseService.user.create({
        data: {
          email: dto.email,
          hash,
        },
      });

      delete user.hash;

      return user;
    } catch (error) {
      if (error instanceof PrismaClientKnownRequestError) {
        if (error.code === 'P2002') {
          throw new ForbiddenException('Duplicate account');
        }
      } else {
        throw error;
      }
    }
  }

  signin() {
    return 'I am sign in';
  }
}
