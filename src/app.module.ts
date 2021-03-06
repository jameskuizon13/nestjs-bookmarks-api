import { Module } from '@nestjs/common';

import { AuthModule } from './auth/auth.module';
import { BookmarkModule } from './bookmark/bookmark.module';
import { UserModule } from './user/user.module';
import { DatabaseModule } from './database/database.module';

@Module({
  imports: [AuthModule, UserModule, BookmarkModule, DatabaseModule],
})
export class AppModule {}
