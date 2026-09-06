import { Body, Controller, Get, HttpCode, Post, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthGuard } from './auth.guard';
import { CurrentUser } from './decorators/current-user.decorator';
import { LoginDto } from './dto/login.dto';
import { RegisterDto } from './dto/register.dto';
import { JwtPayload } from './jwt-payload';

@Controller('api/auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('register')
  @HttpCode(201)
  async register(@Body() payload: RegisterDto) {
    return { data: await this.authService.register(payload.email, payload.name, payload.password) };
  }

  @Post('login')
  @HttpCode(200)
  async login(@Body() payload: LoginDto) {
    return { data: await this.authService.login(payload.email, payload.password) };
  }

  @Get('me')
  @UseGuards(AuthGuard)
  me(@CurrentUser() user: JwtPayload) {
    return { data: this.authService.toPublicUser({ id: user.sub, email: user.email, name: user.name }) };
  }
}
