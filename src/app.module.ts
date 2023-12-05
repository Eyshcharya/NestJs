import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { BookmarkModule } from './bookmark/bookmark.module';
import { EmployeesModule } from './employees/employees.module';

@Module({
  imports: [AuthModule, UserModule, BookmarkModule, EmployeesModule],
})
export class AppModule {}
