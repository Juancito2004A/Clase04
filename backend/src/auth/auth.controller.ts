import { Body, Controller, Get, HttpCode, Post, Req, UseGuards } from '@nestjs/common';
import { Request } from 'express';
import { AuthService } from './auth.service';
import { AuthGuard } from './auth.guard';
import { LoginDto } from './dto/login.dto';
import { RegisterDto } from './dto/register.dto';
import { JwtPayload } from './jwt-payload';

@Controller('api/auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('register')
  @HttpCode(201)
  async register(@Body() payload: RegisterDto) {
    const data = await this.authService.register(payload.email, payload.name, payload.password);
    return { data };
  }

  @Post('login')
  @HttpCode(200)
  async login(@Body() payload: LoginDto) {
    const data = await this.authService.login(payload.email, payload.password);
    return { data };
  }

  @Get('me')
  @UseGuards(AuthGuard)
  me(@Req() request: Request & { user: JwtPayload }) {
    const { sub, email, name } = request.user;
    return { data: { id: sub, email, name } };
  }
}
