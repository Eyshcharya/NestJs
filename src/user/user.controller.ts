import { Controller, Get, Patch, UseGuards } from '@nestjs/common';
import { JwtGuard } from 'src/auth/guard';
import { GetUser } from 'src/auth/decorator';
import { User } from '@prisma/client';
@Controller('users')
export class UserController {
  @UseGuards(JwtGuard)
  @Get('me')
  getUser(@GetUser() user: User, @GetUser('email') email: string) {
    // console.log(email);
    return user;
  }

  @Patch()
  editUser() {}
}
