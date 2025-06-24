import {
  Body,
  Controller,
  HttpCode,
  HttpStatus,
  Post,
  Res,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { Response } from 'express';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @HttpCode(HttpStatus.OK)
  @Post('login')
  async login(
    @Body() input: { email: string; password: string },
    @Res({ passthrough: true }) res: Response,
  ) {
    const loginData = await this.authService.authenticateUser(input);
    res.cookie('jwtAccessToken', loginData.accessToken, {
      httpOnly: true,
      maxAge: 3600000, // 1 hour
    });
    const { accessToken, ...userData } = loginData;
    return userData;
  }
}
